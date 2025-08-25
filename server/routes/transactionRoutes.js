import express from 'express';
import { getTransactions, addTransation, deleteTransaction } from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';
import { predictSavings } from '../controllers/predictController.js';

const router = express.Router();

router.get('/', protect, getTransactions);
router.post('/', protect, addTransation)
router.delete('/:id', protect, deleteTransaction)
router.post('/predict/savings', protect, predictSavings)

export default router;