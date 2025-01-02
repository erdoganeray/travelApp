import mongoose from 'mongoose';
import { City } from '../types';

const citySchema = new mongoose.Schema<City>({
  name: {
    type: String,
    required: [true, 'City name is required'],
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'Country name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5'],
  },
  coordinates: {
    latitude: {
      type: Number,
      required: [true, 'Latitude is required'],
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model<City>('City', citySchema); 