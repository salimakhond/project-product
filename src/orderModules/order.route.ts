import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// Create a New Order
router.post('/orders', OrderController.createANewOrder);

// Get All Order List or Search By Mail Order
router.get('/orders', OrderController.getAllOrderOrSearchByMailOrder);

export const OrderRouters = router;
