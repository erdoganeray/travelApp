import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  name: string;
  cityId: mongoose.Types.ObjectId;
  placeId?: mongoose.Types.ObjectId;
  description: {
    en: string;
    tr: string;
  };
  category: string;
  startDate: Date;
  endDate: Date;
  time?: {
    start: string;
    end: string;
  };
  images: string[];
  ticketPrice?: {
    amount: number;
    currency: string;
  };
  organizer: {
    name: string;
    contact: {
      email?: string;
      phone?: string;
      website?: string;
    };
  };
  capacity?: number;
  registrationRequired: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>({
  name: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: [true, 'City reference is required']
  },
  placeId: {
    type: Schema.Types.ObjectId,
    ref: 'Place'
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
    enum: ['Cultural', 'Music', 'Sports', 'Food', 'Art', 'Festival', 'Educational']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function(value: Date) {
        return value >= new Date();
      },
      message: 'Start date must be in the future'
    }
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
    validate: {
      validator: function(this: IEvent, value: Date) {
        return value >= this.startDate;
      },
      message: 'End date must be after start date'
    }
  },
  time: {
    start: {
      type: String,
      validate: {
        validator: (value: string) => {
          return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
        },
        message: 'Invalid time format (HH:MM)'
      }
    },
    end: {
      type: String,
      validate: {
        validator: (value: string) => {
          return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
        },
        message: 'Invalid time format (HH:MM)'
      }
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
  ticketPrice: {
    amount: {
      type: Number,
      min: [0, 'Price cannot be negative']
    },
    currency: {
      type: String,
      enum: ['USD', 'TRY', 'EUR']
    }
  },
  organizer: {
    name: {
      type: String,
      required: [true, 'Organizer name is required']
    },
    contact: {
      email: {
        type: String,
        validate: {
          validator: (value: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email format'
        }
      },
      phone: {
        type: String,
        validate: {
          validator: (value: string) => {
            return /^\+?[\d\s-]+$/.test(value);
          },
          message: 'Invalid phone number format'
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
    }
  },
  capacity: {
    type: Number,
    min: [1, 'Capacity must be at least 1']
  },
  registrationRequired: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
eventSchema.index({ cityId: 1 });
eventSchema.index({ placeId: 1 });
eventSchema.index({ startDate: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ tags: 1 });

export default mongoose.model<IEvent>('Event', eventSchema); 