const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth.controllers');

router.get('/login', authControllers.login);
router.post('/login', authControllers.loginRoute);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registeRouter);
router.get('/logout', authControllers.logout);

module.exports = router;