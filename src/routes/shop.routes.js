const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop.controllers');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.itemAdd);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.addToCart)

module.exports = router;
