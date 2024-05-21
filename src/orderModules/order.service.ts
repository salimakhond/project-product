import { TOrder } from './order.interface';
import { Order } from './order.model';

// Create a New Order
const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
