const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth.controllers');

router.get('/login', authControllers.login);
router.post('/login', (req, res) => res.send('Esta es la ruta que valida los datos'));
router.get('/register', authControllers.register);
router.post('/register', (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'));
router.get('/logout', authControllers.logout);

module.exports = router;