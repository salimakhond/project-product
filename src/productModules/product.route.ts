import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// Create a New Product
router.post('/products', ProductController.createANewProduct);

// Get All Products List or Search Product
router.get('/products', ProductController.getAllProductOrSearchProduct);

// Retrieve a Specific Product by ID
router.get('/products/:productId', ProductController.getSpecificProduct);

// Update Product Information
router.put('/products/:productId', ProductController.SpecificProductUpdate);

// Delete a Specific Product
router.delete('/products/:productId', ProductController.deleteSpecificProduct);

export const ProductRouters = router;
