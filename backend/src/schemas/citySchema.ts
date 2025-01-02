import { z } from 'zod';

export const createCitySchema = z.object({
  body: z.object({
    name: z.string().min(1, 'City name is required'),
    country: z.string().min(1, 'Country name is required'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    imageUrl: z.string().url('Invalid image URL'),
    rating: z.number().min(0).max(5),
    coordinates: z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
    }),
  }),
});

export const updateCitySchema = createCitySchema.deepPartial();

export const cityIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid city ID'),
  }),
}); 