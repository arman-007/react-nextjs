// src/controllers/hotelController.ts
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { Request, Response, RequestHandler } from "express";
import { upload } from "../config/multerConfig";
import { readHotelData, writeHotelData } from "../utils/hotelUtils";
import { Hotel } from "../types/hotelTypes";
import slugify from "slugify";


const uploadsDir = "./uploads/images";

function validateImages(imageFiles: Express.Multer.File[]): { valid: boolean; message?: string } {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

  for (const file of imageFiles) {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return { valid: false, message: `Invalid file type: ${file.originalname}. Only JPEG, PNG, and WEBP are allowed.` };
    }
  }

  return { valid: true };
}

async function processImages(imageFiles: Express.Multer.File[]): Promise<string[]> {
  const newImagePaths: string[] = [];

  try {
    await fs.promises.access(uploadsDir);
  } catch {
    console.log("Creating uploads directory:", uploadsDir);
    await fs.promises.mkdir(uploadsDir, { recursive: true });
  }

  for (const file of imageFiles) {
    const filePath = file.path;

    try {
      // Read the file from disk instead of using buffer
      const fileData = await fs.promises.readFile(filePath);

      const fileName = `image-${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
      const processedFilePath = path.join(uploadsDir, fileName);

      await sharp(fileData)
        .resize({ width: 800 }) // Resize to 800px max width
        .webp({ quality: 80 }) // Convert to WebP with 80 quality
        .toFile(processedFilePath);

      newImagePaths.push(`/uploads/images/${fileName}`);
      console.log("Image saved:", processedFilePath);
    } catch (err) {
      console.error(`Failed to process file ${file.originalname}:`, err);
      throw new Error(`Failed to process file ${file.originalname}.`);
    }
  }

  return newImagePaths;
}

export const hotelController = {
  getAllHotelIdsAndTitles: async (req: Request, res: Response): Promise<void> => {
    try {
      const hotelFiles = await fs.promises.readdir("./src/data/hotels");
      const hotelsInfo: { [key: string]: string } = {};
  
      for (const file of hotelFiles) {
        const filePath = path.join("./src/data/hotels", file);
        const hotelData = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
        if (hotelData.id && hotelData.title) {
          hotelsInfo[hotelData.id] = hotelData.title;
        }
      }
  
      res.status(200).json(hotelsInfo);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching hotel data." });
    }
  },

  addHotel: [
    (req, res, next) => upload.array("images")(req, res, next),
    async (req: Request, res: Response) => {
      console.log("Uploaded files:", req.files); // Add this line to log the uploaded files
      try {
        const { title, description, guestCount, bedroomCount, bathroomCount, amenities, hostInfo, address, latitude, longitude, rooms } = req.body;
        const imageFiles = req.files as Express.Multer.File[];

        // Validate required fields
        if (!title || !description || !guestCount || !bedroomCount || !bathroomCount || !amenities || !hostInfo || !address || !latitude || !longitude || !rooms) {
          return res.status(400).json({ error: "All fields are required." });
        }

        // Validate minimum number of images
        if (!imageFiles || imageFiles.length < 5) {
          return res.status(400).json({ error: "At least 5 images are required." });
        }

        // Validate image types
        const { valid, message } = validateImages(imageFiles);
        if (!valid) {
          return res.status(400).json({ error: message });
        }

        const imagePaths = await processImages(imageFiles);
        const slug = slugify(String(title), { lower: true, strict: true });
        const newHotel: Hotel = {
          id: String(Date.now()),
          slug,
          images: imagePaths,
          title,
          description,
          guestCount: parseInt(guestCount, 10) || 0,
          bedroomCount: parseInt(bedroomCount, 10) || 0,
          bathroomCount: parseInt(bathroomCount, 10) || 0,
          amenities: amenities.split(","),
          hostInfo: JSON.parse(hostInfo),
          address,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          rooms: JSON.parse(rooms),
        };

        await writeHotelData(newHotel);
        res.status(201).json(newHotel);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while adding the hotel." });
      }
    },
  ] as RequestHandler[],

  getHotelById: async (req: Request, res: Response): Promise<void> => {
    const hotelId = req.params.hotelId;
    const hotel = await readHotelData(hotelId);
    if (!hotel) {
      res.status(404).json({ error: "Hotel not found" });
      return;
    }
    res.json(hotel);
  },

  updateHotel: async (req: Request, res: Response): Promise<void> => {
    const hotelId = req.params.hotelId;

    // Check if the request body is empty
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "No data provided to update." });
      return;
    }

    const hotel = await readHotelData(hotelId);
    if (!hotel) {
      res.status(404).json({ error: "Hotel not found" });
      return;
    }

    // Validate that updated fields are not null, blank, or empty strings
    const invalidFields = Object.entries(req.body).filter(
      ([key, value]) => value === null || value === undefined || value === ""
    );

    if (invalidFields.length > 0) {
      const invalidFieldNames = invalidFields.map(([key]) => key).join(", ");
      res.status(400).json({ error: `The following fields cannot be null, blank, or empty: ${invalidFieldNames}` });
      return;
    }

    const updatedHotel = { ...hotel, ...req.body };
    await writeHotelData(updatedHotel);
    res.json(updatedHotel);
  },

  uploadImages: [
    upload.array("images", 10), // Allow up to 10 images at once
    async (req: Request, res: Response): Promise<void> => {
      const hotelId = req.body.hotelId;
  
      if (!hotelId) {
        res.status(400).json({ error: "Hotel ID is required." });
        return;
      }
  
      const hotel = await readHotelData(hotelId);
      if (!hotel) {
        res.status(404).json({ error: "Hotel not found." });
        return;
      }
  
      const imageFiles = req.files as Express.Multer.File[];
      if (!imageFiles || imageFiles.length === 0) {
        res.status(400).json({ error: "No images uploaded." });
        return;
      }

      // Validate image types
      const { valid, message } = validateImages(imageFiles);
      if (!valid) {
        res.status(400).json({ error: message });
        return; 
      }

      try {
        const newImagePaths = await processImages(imageFiles);
        hotel.images = [...hotel.images, ...newImagePaths];
        await writeHotelData(hotel);
  
        res.status(200).json({
          message: "Images uploaded and processed successfully.",
          images: hotel.images,
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
      }
    },
  ],

  deleteHotelById: async (req: Request, res: Response): Promise<void> => {
    const hotelId = req.params.hotelId;
    const filePath = path.join("./src/data/hotels", `${hotelId}.json`);

    try {
      await fs.promises.access(filePath);
      await fs.promises.unlink(filePath);
      res.status(200).json({ message: "Hotel deleted successfully" });
    } catch (error) {
      res.status(404).json({ error: "Hotel not found" });
    }
  },
};
