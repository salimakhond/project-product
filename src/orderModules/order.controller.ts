import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.zod.validation';

// Create a New Order
const createANewOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    // data validate with zod
    const zodParseData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderIntoDB(zodParseData);
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

// Get All Order List or Search By Mail
const getAllOrderOrSearchByMailOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    // Checking search field empty
    if (email === '') {
      return res.status(400).json({
        success: false,
        message: `Search field empty`,
      });
    }

    const result =
      await OrderServices.getAllOrderOrSearchByMailOrderFromDB(email);

    // Checked results not matching
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `No orders found for email: ${email}`,
      });
    }

    if (email) {
      return res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email!`,
        data: result,
      });
    } else {
      // Checked no mail available
      if (Array.isArray(result) && result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
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
  getAllOrderOrSearchByMailOrder,
};
