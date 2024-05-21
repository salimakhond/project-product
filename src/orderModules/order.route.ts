import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// Create a New Order
router.post('/orders', OrderController.createANewOrder);

export const OrderRouters = router;
