import mongoose, { Document, Schema } from 'mongoose';

export interface IDayPlan {
  date: Date;
  activities: Array<{
    placeId: mongoose.Types.ObjectId;
    startTime: string;
    endTime: string;
    notes?: string;
  }>;
}

export interface ITravelPlan extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  cityId: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  budget: {
    amount: number;
    currency: string;
  };
  dayPlans: IDayPlan[];
  status: string;
  preferences: {
    pace: string;
    interests: string[];
    transportation: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const travelPlanSchema = new Schema<ITravelPlan>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required']
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: [true, 'City reference is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function(this: ITravelPlan, value: Date) {
        return value >= new Date();
      },
      message: 'Start date must be in the future'
    }
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
    validate: {
      validator: function(this: ITravelPlan, value: Date) {
        return value >= this.startDate;
      },
      message: 'End date must be after start date'
    }
  },
  budget: {
    amount: {
      type: Number,
      required: [true, 'Budget amount is required'],
      min: [0, 'Budget cannot be negative']
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      enum: ['USD', 'TRY', 'EUR']
    }
  },
  dayPlans: [{
    date: {
      type: Date,
      required: true
    },
    activities: [{
      placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
      },
      startTime: {
        type: String,
        required: true,
        validate: {
          validator: (value: string) => {
            return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
          },
          message: 'Invalid time format (HH:MM)'
        }
      },
      endTime: {
        type: String,
        required: true,
        validate: {
          validator: (value: string) => {
            return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
          },
          message: 'Invalid time format (HH:MM)'
        }
      },
      notes: String
    }]
  }],
  status: {
    type: String,
    enum: ['draft', 'planned', 'in-progress', 'completed', 'cancelled'],
    default: 'draft'
  },
  preferences: {
    pace: {
      type: String,
      enum: ['relaxed', 'moderate', 'intense'],
      required: true
    },
    interests: [{
      type: String,
      enum: ['culture', 'food', 'nature', 'shopping', 'history', 'entertainment']
    }],
    transportation: [{
      type: String,
      enum: ['walking', 'public', 'taxi', 'rental']
    }]
  }
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
travelPlanSchema.index({ userId: 1 });
travelPlanSchema.index({ cityId: 1 });
travelPlanSchema.index({ startDate: 1 });
travelPlanSchema.index({ status: 1 });

export default mongoose.model<ITravelPlan>('TravelPlan', travelPlanSchema); 