import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  productId: z.string().min(1, 'ProductId is required'),
  price: z
    .number()
    .nonnegative('Price must be a non-negative number')
    .refine((val) => val !== null, 'Price is required'),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer')
    .refine((val) => val !== null, 'Quantity is required'),
});

export default orderValidationSchema;
