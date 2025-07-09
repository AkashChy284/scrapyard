import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from backend folder
dotenv.config({ path: path.join(__dirname, "../.env") });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Bulk insert function
const bulkInsert = async () => {
  try {
    const result = await cloudinary.search
      .expression("resource_type:image")
      .max_results(100)
      .execute();

    const cloudinaryImages = result.resources.map(item => item.secure_url);

    const products = cloudinaryImages.map((url, index) => ({
      name: `Art Product ${index + 1}`,
      description: `Beautifully transformed scrap art piece ${index + 1}.`,
      price: 200 + index,
      category: "Decorated Scrap",
      subCategory: "Art Installation",
      sizes: ["S", "M", "L"],
      bestseller: index % 2 === 0,
      image: [url],
      date: Date.now(),

      // Additional scrapyard fields
      materialType: index % 2 === 0 ? "Metal" : "Wood",
      weight: 5 + index,
      location: "Main Scrap Warehouse",
      condition: "used",
      availability: true,
      contactInfo: "artist@example.com",
      artistName: `Artist ${index + 1}`,
      artistDescription: `Story of how Artist ${index + 1} transformed scrap into beauty.`,
      originalScrapCost: 50 + index,
      transformationDate: new Date(),
    }));

    await productModel.insertMany(products);
    console.log(`✅ ${products.length} products inserted.`);
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting products:", error);
    process.exit(1);
  }
};

bulkInsert();
