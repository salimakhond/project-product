import { TOrder } from './order.interface';
import { Order } from './order.model';

// Create a New Order
const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

// Get All Order List or Search By Mail Order
const getAllOrderOrSearchByMailOrderFromDB = async (email?: string) => {
  if (email) {
    return await Order.findOne({ email });
  } else {
    return await Order.find();
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderOrSearchByMailOrderFromDB,
};
