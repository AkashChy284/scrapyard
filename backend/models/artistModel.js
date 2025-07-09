import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  contactInfo: { type: String }, // email or phone
  socialLinks: {
    instagram: String,
    website: String,
  },
  joinedAt: { type: Date, default: Date.now }
});

const artistModel = mongoose.models.artist || mongoose.model("artist", artistSchema);

export default artistModel;
