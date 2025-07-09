// deleteAllCloudinaryImages.mjs
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'; // ✅ this must be at the top before using cloudinary

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function deleteAllCloudinaryImages() {
  let nextCursor = null;

  try {
    do {
      const result = await cloudinary.search
        .expression('resource_type:image') // or 'folder:scrap-products' to target a folder
        .max_results(100)
        .next_cursor(nextCursor)
        .execute();

      for (const img of result.resources) {
        await cloudinary.uploader.destroy(img.public_id, { invalidate: true });
        console.log(`🗑️ Deleted: ${img.public_id}`);
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    console.log("✅ All images deleted from Cloudinary.");
  } catch (err) {
    console.error("❌ Error deleting images:", err);
  }
}

deleteAllCloudinaryImages();
