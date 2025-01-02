import { Request, Response, NextFunction } from 'express';
import City from '../models/City';
import { AppError } from '../middleware/errorHandler';

// Get all cities
export const getAllCities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cities = await City.find().sort({ name: 1 });
    res.status(200).json({
      success: true,
      data: cities,
    });
  } catch (error) {
    next(error);
  }
};

// Get city by ID
export const getCityById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      throw new AppError('City not found', 404);
    }
    res.status(200).json({
      success: true,
      data: city,
    });
  } catch (error) {
    next(error);
  }
};

// Create new city
export const createCity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json({
      success: true,
      data: city,
    });
  } catch (error) {
    next(error);
  }
};

// Update city
export const updateCity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const city = await City.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!city) {
      throw new AppError('City not found', 404);
    }
    res.status(200).json({
      success: true,
      data: city,
    });
  } catch (error) {
    next(error);
  }
};

// Delete city
export const deleteCity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) {
      throw new AppError('City not found', 404);
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
}; 