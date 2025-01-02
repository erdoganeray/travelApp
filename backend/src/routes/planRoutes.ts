import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

// Get all plans for the authenticated user
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all plans' });
});

// Get plan by id
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get plan ${req.params.id}` });
});

// Create new plan
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create new plan', data: req.body });
});

// Update plan
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update plan ${req.params.id}`, data: req.body });
});

// Delete plan
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete plan ${req.params.id}` });
});

export default router; 