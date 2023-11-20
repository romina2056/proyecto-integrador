const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers').default;

router.get('/home', mainControlles.home);
router.get('/contact', mainControlles.contact );
router.get('/about', mainControlles.about );
router.get('/faqs', mainControlles.faqs);


module.exports = router;