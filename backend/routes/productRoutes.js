import express from 'express';
import asyncHndler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc  Fetch all Products 
// @route  GET /api/products
// @access  Public
router.get('/', asyncHndler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}));

// @desc  Fetch all Products 
// @route  GET /api/products/:id
// @access  Public
router.get(
    '/:id',
    asyncHndler(async (req, res) => {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product)
        } else {
            res.status(404);
            throw new Error('Product not found');

        }
    })
)
export default router; 