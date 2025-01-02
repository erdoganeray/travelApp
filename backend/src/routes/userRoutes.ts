import { Router } from 'express';
import { Request, Response } from 'express';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/register', (req: Request, res: Response) => {
  res.json({ message: 'Register user', data: req.body });
});

router.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'Login user', data: req.body });
});

// Protected routes
router.get('/profile', authenticateToken as any, (req: Request, res: Response) => {
  res.json({ message: 'Get user profile' });
});

router.put('/profile', authenticateToken as any, (req: Request, res: Response) => {
  res.json({ message: 'Update user profile', data: req.body });
});

router.put('/preferences', authenticateToken as any, (req: Request, res: Response) => {
  res.json({ message: 'Update user preferences', data: req.body });
});

export default router; 