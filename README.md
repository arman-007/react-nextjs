# 🏨 Hotel Management API 🚀

This project provides a RESTful API for managing hotel data 🏢. The API includes endpoints for adding ➕, retrieving 🔍, updating ✏️, and deleting 🗑️ hotel records, as well as uploading images 🖼️ associated with each hotel. Images are optimized through compression 📉, resizing 🔄, and format conversion 🌀 to improve storage efficiency 💾.

## 🗂️ Table of Contents

- [🚀 Getting Started](#getting-started)
- [📝 Project Overview](#project-overview)
- [🔗 API Endpoints](#api-endpoints)
- [🧪 Testing](#testing)
- [📁 Project Structure](#project-structure)
- [🖼️ Image Optimization](#image-optimization)

---

## 🚀 Getting Started

### Prerequisites ✅

- [Node.js](https://nodejs.org/en/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (version 8.x or higher)
- [Git](https://git-scm.com/)

### 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### 🛠️ Building the Project

This project uses TypeScript 📘. To compile TypeScript files into JavaScript, use:

```bash
npm run build
```

This will create a `dist` directory containing the compiled JavaScript files.

### ▶️ Running the Application

To start the server, run:

```bash
npm start
```

The server will be available at [http://localhost:3000](http://localhost:3000).

---

## 📝 Project Overview

The Hotel Management API allows you to manage hotel data 🏢, including adding new hotels ➕, retrieving hotel details 🔍, updating hotel information ✏️, and deleting hotels 🗑️. Additionally, images associated with each hotel can be uploaded 🖼️ and optimized through compression 📉, resizing 🔄, and format conversion 🌀 for efficient storage and fast access ⚡.

---

## 🔗 API Endpoints

### 1. **📋 Get All Hotels**

- **Endpoint**: `GET /hotel`
- **Description**: Retrieves the IDs and titles of all available hotels 🏢.
- **Response**:

  ```json
  {
    "1731327753872": "Sunset Villa 12",
    "1731329809817": "Cozy Cottage"
  }
  ```

### 2. **🔍 Get Hotel by ID**

- **Endpoint**: `GET /hotel/:hotelId`
- **Description**: Retrieves the complete information of a hotel by its ID 🆔.
- **Sample Request**: `GET /hotel/1731327753872`
- **Response**:

  ```json
  {
    "id": "1731327753872",
    "title": "Sunset Villa 12",
    "slug": "sunset-villa-12",
    "description": "A beautiful villa with beach views.",
    "images": ["/uploads/images/villa.jpg"],
    "guestCount": 4,
    "bedroomCount": 2,
    "bathroomCount": 2,
    "amenities": ["WiFi", "Pool"],
    "address": "123 Ocean Drive",
    "latitude": 40.7128,
    "longitude": -74.006,
    "rooms": []
  }
  ```

### 3. **➕ Add a New Hotel**

- **Endpoint**: `POST /hotel`
- **Description**: Adds a new hotel with provided information 📝.
- **Payload** (Form Data):

  ```json
  {
    "title": "Sunset Villa",
    "description": "A beautiful villa with beach views.",
    "guestCount": 4,
    "bedroomCount": 2,
    "bathroomCount": 2,
    "amenities": "WiFi,Pool",
    "latitude": 40.7128,
    "longitude": -74.006,
    "rooms": []
  }
  ```

- **Response**: Returns the created hotel data.

### 4. **🖼️ Upload Hotel Images**

- **Endpoint**: `POST /hotel/images`
- **Description**: Uploads images for a specified hotel 🏢. Images are optimized through compression 📉, resizing 🔄, and format conversion 🌀.
- **Payload**: `FormData`
  - `hotelId` - The hotel ID for which the images are being uploaded 🆔.
  - `images` - Image files 🖼️.

- **Response**: Returns a message and the paths to the uploaded images 🛣️.

- **Example Usage**: Upload images with Postman or similar tool using `form-data` content type.

### 5. **✏️ Update a Hotel**

- **Endpoint**: `PUT /hotel/:hotelId`
- **Description**: Updates the details of a hotel 🏢.
- **Payload** (JSON):

  ```json
  {
    "title": "Updated Sunset Villa",
    "guestCount": 5
  }
  ```

- **Response**: Returns the updated hotel data 📋.

### 6. **🗑️ Delete a Hotel**

- **Endpoint**: `DELETE /hotel/:hotelId`
- **Description**: Deletes a hotel by its ID 🆔.
- **Sample Request**: `DELETE /hotel/1731327753872`
- **Response**:

  ```json
  {
    "message": "Hotel deleted successfully"
  }
  ```

---

## 🧪 Testing

This project includes unit tests using Jest and Supertest to test API endpoints and functionality 🧪.

### ▶️ Running Tests

To run the tests, use:

```bash
npm test
```

This will execute all test cases, including validation for endpoints like `POST /hotel/images` and `DELETE /hotel/:hotelId`.

---

## 📁 Project Structure

Here’s a graphical representation of the project structure for better understanding 🧩:

```
hotel-management-api/
├── src/
│   ├── controllers/
│   │   └── hotelController.ts         # Controller for API logic 🤖
│   ├── data/
│   │   └── hotels/                    # JSON files for each hotel record 📂
│   ├── types/
│   │   └── hotelTypes.ts              # TypeScript definitions for hotel and room 📝
│   ├── utils/
│   │   └── hotelUtils.ts              # Utility functions for file handling ⚙️
│   ├── __tests__/
│   │   └── hotelController.test.ts    # Jest tests for the hotel API 🧪
│   ├── index.ts                       # Express application setup 🌐
│   └── server.ts                      # Server configuration ⚙️
├── uploads/
│   └── images/                        # Directory for uploaded images 🖼️
├── dist/                              # Compiled JavaScript files 🗄️
├── package.json                       # Node.js project dependencies 📦
├── tsconfig.json                      # TypeScript configuration ⚙️
└── README.md                          # Project documentation 📖
```

---

## 🖼️ Image Optimization

When images are uploaded to the API, they are processed for optimization 🛠️. The steps include:

1. **📉 Compression**: Images are compressed to reduce file size 📏.
2. **🔄 Resizing**: Images are resized to specified dimensions 📐, maintaining a balance between quality and file size 🖼️.
3. **🌀 Format Conversion**: Uploaded images are converted to `JPEG` format if they are not already, further reducing file size 🔧.

These optimizations are done using the [Sharp](https://sharp.pixelplumbing.com/) library, which provides high-performance image processing capabilities 💪.

---

This documentation covers all steps needed to set up 🔧, build 🛠️, and run ▶️ the project, as well as details about each API endpoint 🔗. For any additional configuration or customization 🔄, refer to the codebase and comments in the files 📄.

