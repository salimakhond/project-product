import { z } from 'zod';

// Define Zod schema for TVariants
const variantsValidationSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

// Define Zod schema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean().refine((val) => val === true || val === false, {
    message: 'InStock is required',
  }),
});

// Define Zod schema for TProduct
const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string().min(1)).min(1, 'Tags are required'),
  variants: z
    .array(variantsValidationSchema)
    .min(1, 'At least one variant is required'),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
