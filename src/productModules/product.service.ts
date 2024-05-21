import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create a New Product
const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

// Get All Products List or Search Product
const getAllProductOrSearchProductFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    return await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { tags: { $regex: searchTerm, $options: 'i' } },
      ],
    });
  } else {
    return await Product.find();
  }
};

// Retrieve a Specific Product by ID
const getSpecificProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

// Update Product Information
const SpecificProductUpdateFromDB = async (_id: string, updates: any) => {
  const result = await Product.findOneAndUpdate({ _id }, updates, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a Specific Product
const deleteSpecificProductFromDB = async (_id: string) => {
  const result = await Product.deleteOne({ _id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductOrSearchProductFromDB,
  getSpecificProductFromDB,
  SpecificProductUpdateFromDB,
  deleteSpecificProductFromDB,
};
