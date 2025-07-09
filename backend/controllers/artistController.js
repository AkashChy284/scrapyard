import { v2 as cloudinary } from 'cloudinary';
import Artist from '../models/artistModel.js';

export const addArtist = async (req, res) => {
  try {
    let { name, bio } = req.body;

    // Optional: default image if none is provided
   const file = req.file ;

    if (!name || !bio || !file) {
      return res.status(400).json({ success: false, message: 'Name, bio, and profileImage are required' });
    }
    
    const profileImage = file.filename;


    const newArtist = new Artist({
      name,
      bio,
      profileImage 
    });

    await newArtist.save();
    res.status(201).json({ success: true, message: 'Artist added successfully' });
  } catch (error) {
    console.error('Failed to add artist:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json({ success: true, data: artists });
  } catch (error) {
    console.error('Failed to get artists:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
