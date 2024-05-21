import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// Create a New Order
const createANewOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const OrderController = {
  createANewOrder,
};
