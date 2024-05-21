import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};
const SpecificProductUpdateFromDB = async (_id: string, updates: any) => {
  const result = await Product.findOneAndUpdate({ _id }, updates, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSpecificProductFromDB,
  SpecificProductUpdateFromDB,
};
