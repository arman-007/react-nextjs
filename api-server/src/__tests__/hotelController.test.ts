import request from "supertest";
import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

import { hotelController } from "../controllers/hotelController";
import { Hotel } from "../types/hotelTypes";

const uploadsDir = "./uploads/images";

const storage = multer.diskStorage({
  destination: async (_, __, cb) => {
    try {
      await fs.promises.access(uploadsDir);
    } catch {
      await fs.promises.mkdir(uploadsDir, { recursive: true });
    }
    cb(null, uploadsDir);
  },
  filename: (_, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage });
const app = express();
app.use(upload.array("images"));
app.use(express.json());
app.get("/hotels", hotelController.getAllHotelIdsAndTitles);
app.post("/hotels", hotelController.addHotel);
app.get("/hotels/:hotelId", hotelController.getHotelById);
app.put("/hotels/:hotelId", hotelController.updateHotel);
app.post("/hotels/upload-images", hotelController.uploadImages);
app.delete("/hotels/:hotelId", hotelController.deleteHotelById);

jest.mock("fs", () => ({
  promises: {
    readdir: jest.fn(() => Promise.resolve([])),
    readFile: jest.fn(() => Promise.resolve("")),
    writeFile: jest.fn(() => Promise.resolve()),
    access: jest.fn(() => Promise.resolve()),
    mkdir: jest.fn(() => Promise.resolve()),
    unlink: jest.fn(() => Promise.resolve()),
  },
  createWriteStream: jest.fn(() => ({
    write: jest.fn(),
    end: jest.fn(),
    on: jest.fn(),
  })),
}));

describe("hotelController", () => {
  describe("getAllHotelIdsAndTitles", () => {
    it("should return a list of hotel IDs and titles", async () => {
      const mockHotelFiles = ["hotel1.json", "hotel2.json"];
      const mockHotelData1 = { id: "1", title: "Hotel One" };
      const mockHotelData2 = { id: "2", title: "Hotel Two" };

      (fs.promises.readdir as jest.Mock).mockResolvedValue(mockHotelFiles);
      (fs.promises.readFile as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockHotelData1))
        .mockResolvedValueOnce(JSON.stringify(mockHotelData2));

      const response = await request(app).get("/hotels");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        "1": "Hotel One",
        "2": "Hotel Two",
      });
    });

    it("should return a 500 error if an error occurs", async () => {
      (fs.promises.readdir as jest.Mock).mockRejectedValue(
        new Error("Failed to read directory")
      );

      const response = await request(app).get("/hotels");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        error: "An error occurred while fetching hotel data.",
      });
    });

    it("should return an empty object if no hotels have id and title", async () => {
      const mockHotelFiles = ["hotel1.json", "hotel2.json"];
      const mockHotelData1 = { id: "", title: "" };
      const mockHotelData2 = { id: "", title: "" };

      (fs.promises.readdir as jest.Mock).mockResolvedValue(mockHotelFiles);
      (fs.promises.readFile as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockHotelData1))
        .mockResolvedValueOnce(JSON.stringify(mockHotelData2));

      const response = await request(app).get("/hotels");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({});
    });
  });

  describe("addHotel", () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it("should add a new hotel and return 201 status", async () => {
      const mockHotel = {
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: "wifi,pool",
        hostInfo: JSON.stringify({ name: "John Doe", contact: "1234567890" }),
        address: "123 Street, City",
        latitude: "12.34",
        longitude: "56.78",
        rooms: JSON.stringify([{ name: "Room 1", price: 100 }]),
      };
  
      // Mock fs.writeFile to resolve without any error
      jest.spyOn(fs.promises, "writeFile").mockResolvedValue(undefined);
  
      const response = await request(app)
        .post("/hotels")
        .field("title", mockHotel.title)
        .field("description", mockHotel.description)
        .field("guestCount", mockHotel.guestCount.toString())
        .field("bedroomCount", mockHotel.bedroomCount.toString())
        .field("bathroomCount", mockHotel.bathroomCount.toString())
        .field("amenities", mockHotel.amenities)
        .field("hostInfo", mockHotel.hostInfo)
        .field("address", mockHotel.address)
        .field("latitude", mockHotel.latitude)
        .field("longitude", mockHotel.longitude)
        .field("rooms", mockHotel.rooms)
        .attach("images", Buffer.from("image data"), "image1.webp")
        .attach("images", Buffer.from("image data"), "image2.webp")
        .attach("images", Buffer.from("image data"), "image3.webp")
        .attach("images", Buffer.from("image data"), "image4.webp")
        .attach("images", Buffer.from("image data"), "image5.webp");
  
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        title: mockHotel.title,
        description: mockHotel.description,
        guestCount: mockHotel.guestCount,
        bedroomCount: mockHotel.bedroomCount,
        bathroomCount: mockHotel.bathroomCount,
        amenities: ["wifi", "pool"],
      });
  
      // Ensure that the response contains the processed image paths
      expect(response.body.images).toHaveLength(5);
      expect(response.body.images).toEqual([
        "/uploads/images/image-1.webp",
        "/uploads/images/image-2.webp",
        "/uploads/images/image-3.webp",
        "/uploads/images/image-4.webp",
        "/uploads/images/image-5.webp",
      ]);
    });

    it("should return 400 if required fields are missing", async () => {
      const response = await request(app).post("/hotels").send({});

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "All fields are required." });
    });

    it("should return 400 if less than 5 images are uploaded", async () => {
      const response = await request(app)
        .post("/hotels")
        .field("title", "Hotel One")
        .field("description", "A nice hotel")
        .field("guestCount", "2")
        .field("bedroomCount", "1")
        .field("bathroomCount", "1")
        .field("amenities", "wifi,pool")
        .field(
          "hostInfo",
          JSON.stringify({ name: "John Doe", contact: "1234567890" })
        )
        .field("address", "123 Street, City")
        .field("latitude", "12.34")
        .field("longitude", "56.78")
        .field("rooms", JSON.stringify([{ name: "Room 1", price: 100 }]))
        .attach("images", Buffer.from("image data"), "image1.webp");


      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "At least 5 images are required.",
      });
    });

    it("should return 500 if an error occurs while adding the hotel", async () => {
      (fs.promises.writeFile as jest.Mock).mockRejectedValue(
        new Error("Failed to write file")
      );

      const response = await request(app)
        .post("/hotels")
        .field("title", "Hotel One")
        .field("description", "A nice hotel")
        .field("guestCount", "2")
        .field("bedroomCount", "1")
        .field("bathroomCount", "1")
        .field("amenities", "wifi,pool")
        .field(
          "hostInfo",
          JSON.stringify({ name: "John Doe", contact: "1234567890" })
        )
        .field("address", "123 Street, City")
        .field("latitude", "12.34")
        .field("longitude", "56.78")
        .field("rooms", JSON.stringify([{ name: "Room 1", price: 100 }]))
        .attach("images", Buffer.from("image data"), "image1.jpg")
        .attach("images", Buffer.from("image data"), "image2.jpg")
        .attach("images", Buffer.from("image data"), "image3.jpg")
        .attach("images", Buffer.from("image data"), "image4.jpg")
        .attach("images", Buffer.from("image data"), "image5.jpg");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        error: "An error occurred while adding the hotel.",
      });
    });
  });

  describe("getHotelById", () => {
    it("should return a hotel by ID", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );

      const response = await request(app).get("/hotels/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockHotel);
    });

    it("should return 404 if hotel is not found", async () => {
      (fs.promises.readFile as jest.Mock).mockResolvedValue(null);

      const response = await request(app).get("/hotels/1");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Hotel not found" });
    });
  });

  describe("updateHotel", () => {
    it("should update a hotel and return the updated hotel", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      const updatedHotel = { ...mockHotel, title: "Updated Hotel One" };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );
      (fs.promises.writeFile as jest.Mock).mockResolvedValue(undefined);

      const response = await request(app)
        .put("/hotels/1")
        .send({ title: "Updated Hotel One" });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedHotel);
    });

    it("should return 400 if no data is provided to update", async () => {
      const response = await request(app).put("/hotels/1").send({});

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "No data provided to update." });
    });

    it("should return 404 if hotel is not found", async () => {
      (fs.promises.readFile as jest.Mock).mockResolvedValue(null);

      const response = await request(app)
        .put("/hotels/1")
        .send({ title: "Updated Hotel One" });

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Hotel not found" });
    });

    it("should return 400 if updated fields are invalid", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );

      const response = await request(app).put("/hotels/1").send({ title: "" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "The following fields cannot be null, blank, or empty: title",
      });
    });
  });

  describe("uploadImages", () => {
    it("should upload images and return the updated hotel", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );
      (fs.promises.writeFile as jest.Mock).mockResolvedValue(undefined);

      const response = await request(app)
        .post("/hotels/upload-images")
        .field("hotelId", "1")
        .attach("images", Buffer.from("image data"), "image1.jpg")
        .attach("images", Buffer.from("image data"), "image2.jpg");

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        message: "Images uploaded and processed successfully.",
        images: expect.arrayContaining([
          expect.stringContaining("/uploads/images/"),
        ]),
      });
    });

    it("should return 400 if hotel ID is not provided", async () => {
      const response = await request(app)
        .post("/hotels/upload-images")
        .attach("images", Buffer.from("image data"), "image1.jpg");

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "Hotel ID is required." });
    });

    it("should return 404 if hotel is not found", async () => {
      (fs.promises.readFile as jest.Mock).mockResolvedValue(null);

      const response = await request(app)
        .post("/hotels/upload-images")
        .field("hotelId", "1")
        .attach("images", Buffer.from("image data"), "image1.jpg");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Hotel not found." });
    });

    it("should return 400 if no images are uploaded", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );

      const response = await request(app)
        .post("/hotels/upload-images")
        .field("hotelId", "1");

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "No images uploaded." });
    });

    it("should return 500 if an error occurs while uploading images", async () => {
      const mockHotel: Hotel = {
        id: "1",
        slug: "hotel-one",
        images: ["/uploads/images/image-1.webp"],
        title: "Hotel One",
        description: "A nice hotel",
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ["wifi", "pool"],
        hostInfo: { name: "John Doe", contact: "1234567890" },
        address: "123 Street, City",
        latitude: 12.34,
        longitude: 56.78,
        rooms: [{ name: "Room 1", price: 100 }],
      };

      (fs.promises.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockHotel)
      );
      (fs.promises.writeFile as jest.Mock).mockRejectedValue(
        new Error("Failed to write file")
      );

      const response = await request(app)
        .post("/hotels/upload-images")
        .field("hotelId", "1")
        .attach("images", Buffer.from("image data"), "image1.jpg");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "An unknown error occurred" });
    });
  });

  describe("deleteHotelById", () => {
    it("should delete a hotel by ID and return 200 status", async () => {
      const mockHotelId = "1";
      const filePath = path.join("./src/data/hotels", `${mockHotelId}.json`);

      (fs.promises.access as jest.Mock).mockResolvedValue(undefined);
      (fs.promises.unlink as jest.Mock).mockResolvedValue(undefined);

      const response = await request(app).delete(`/hotels/${mockHotelId}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Hotel deleted successfully" });
    });

    it("should return 404 if hotel is not found", async () => {
      const mockHotelId = "1";
      const filePath = path.join("./src/data/hotels", `${mockHotelId}.json`);

      (fs.promises.access as jest.Mock).mockRejectedValue(
        new Error("File not found")
      );

      const response = await request(app).delete(`/hotels/${mockHotelId}`);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Hotel not found" });
    });
  });
});
