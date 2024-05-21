import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/products', ProductController.createANewProduct);
router.get('/products', ProductController.getAllProduct);
router.get('/products/:productId', ProductController.getSpecificProduct);

export const ProductRouters = router;
