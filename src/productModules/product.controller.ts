import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// Create a New Product
const createANewProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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

// Get All Products List or Search Product
const getAllProductOrSearchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result =
      await ProductServices.getAllProductOrSearchProductFromDB(searchTerm);

    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term "${searchTerm}" fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'All products fetched successfully!',
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

// Retrieve a Specific Product by ID
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSpecificProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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

// Update Product Information
const SpecificProductUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatesProduct = req.body.product;
    const result = await ProductServices.SpecificProductUpdateFromDB(
      productId,
      updatesProduct,
    );
    res.status(200).json({
      success: true,
      message: 'Products updated successfully!',
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

// Delete a Specific Product
const deleteSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSpecificProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
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

export const ProductController = {
  createANewProduct,
  getAllProductOrSearchProduct,
  getSpecificProduct,
  SpecificProductUpdate,
  deleteSpecificProduct,
};
