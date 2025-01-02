import mongoose, { Document, Schema } from 'mongoose';

export interface IPlace extends Document {
  name: string;
  cityId: mongoose.Types.ObjectId;
  description: {
    en: string;
    tr: string;
  };
  category: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  rating: number;
  priceLevel: string;
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  contactInfo: {
    phone?: string;
    email?: string;
    website?: string;
  };
  amenities: string[];
  createdAt: Date;
  updatedAt: Date;
}

const placeSchema = new Schema<IPlace>({
  name: {
    type: String,
    required: [true, 'Place name is required'],
    trim: true
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: [true, 'City reference is required']
  },
  description: {
    en: {
      type: String,
      required: [true, 'English description is required']
    },
    tr: {
      type: String,
      required: [true, 'Turkish description is required']
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Restaurant', 'Museum', 'Park', 'Hotel', 'Shopping', 'Historical', 'Entertainment']
  },
  coordinates: {
    latitude: {
      type: Number,
      required: [true, 'Latitude is required'],
      min: -90,
      max: 90
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'],
      min: -180,
      max: 180
    }
  },
  images: [{
    type: String,
    validate: {
      validator: (value: string) => {
        return /^https?:\/\/.+/.test(value);
      },
      message: 'Invalid image URL format'
    }
  }],
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  priceLevel: {
    type: String,
    enum: ['$', '$$', '$$$', '$$$$'],
    required: true
  },
  openingHours: {
    type: Map,
    of: {
      open: String,
      close: String
    }
  },
  contactInfo: {
    phone: {
      type: String,
      validate: {
        validator: (value: string) => {
          return /^\+?[\d\s-]+$/.test(value);
        },
        message: 'Invalid phone number format'
      }
    },
    email: {
      type: String,
      validate: {
        validator: (value: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email format'
      }
    },
    website: {
      type: String,
      validate: {
        validator: (value: string) => {
          return /^https?:\/\/.+/.test(value);
        },
        message: 'Invalid website URL format'
      }
    }
  },
  amenities: [{
    type: String
  }]
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
placeSchema.index({ cityId: 1 });
placeSchema.index({ category: 1 });
placeSchema.index({ rating: -1 });
placeSchema.index({ 'coordinates.latitude': 1, 'coordinates.longitude': 1 });

export default mongoose.model<IPlace>('Place', placeSchema); 