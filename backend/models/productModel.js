import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
    materialType: { type: String }, // metal, plastic, etc.
  weight: { type: Number }, // in kg
  location: { type: String }, // warehouse location
  condition: { type: String, enum: ['new', 'used', 'broken'] },
  availability: { type: Boolean, default: true },
  contactInfo: { type: String }, // email or phone

  artistName: { type: String }, // artist who worked on it
  artistDescription: { type: String }, // short story or background
  originalScrapCost: { type: Number }, // cost before decoration
  transformationDate: { type: Date } // date of artistic transformation
})

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel