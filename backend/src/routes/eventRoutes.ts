import { Router } from 'express';

const router = Router();

// Get all events
router.get('/', (req, res) => {
  res.json({ message: 'Get all events' });
});

// Get event by id
router.get('/:id', (req, res) => {
  res.json({ message: `Get event ${req.params.id}` });
});

export default router; 