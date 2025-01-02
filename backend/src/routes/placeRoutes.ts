import { Router } from 'express';

const router = Router();

// Get all places
router.get('/', (req, res) => {
  res.json({ message: 'Get all places' });
});

// Get place by id
router.get('/:id', (req, res) => {
  res.json({ message: `Get place ${req.params.id}` });
});

export default router; 