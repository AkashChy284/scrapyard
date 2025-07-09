import express from 'express'
import multer from 'multer'
import { addArtist, getAllArtists } from '../controllers/artistController.js'
import upload from '../middleware/multer.js'; // ✅ Use your custom multer config


const artistRouter = express.Router()

artistRouter.get('/list', getAllArtists)
artistRouter.post('/add', upload.single('profileImage'), addArtist);


export default artistRouter
