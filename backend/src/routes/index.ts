import { Router } from 'express';
import cityRoutes from './cityRoutes';
import placeRoutes from './placeRoutes';
import eventRoutes from './eventRoutes';
import planRoutes from './planRoutes';
import userRoutes from './userRoutes';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.use('/cities', cityRoutes);
router.use('/places', placeRoutes);
router.use('/events', eventRoutes);

// Protected routes - authenticateToken middleware will be applied to all routes in planRoutes
router.use('/plans', authenticateToken as any, planRoutes);
router.use('/users', userRoutes); // Some user routes are public (login/register)

export default router; 