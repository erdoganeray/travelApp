import { Router } from 'express';
import {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
} from '../controllers/cityController';
import { validate } from '../middleware/validate';
import {
  createCitySchema,
  updateCitySchema,
  cityIdSchema,
} from '../schemas/citySchema';

const router = Router();

router.route('/')
  .get(getAllCities)
  .post(validate(createCitySchema), createCity);

router.route('/:id')
  .get(validate(cityIdSchema), getCityById)
  .put(validate(cityIdSchema.merge(updateCitySchema)), updateCity)
  .delete(validate(cityIdSchema), deleteCity);

export default router; 