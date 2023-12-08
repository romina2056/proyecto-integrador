const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controllers');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createItem);
router.get('edit/:id', adminControllers.editView);
router.put('edit/:id', adminControllers.editDate);
router.delete('delete/:id', adminControllers.delete);


module.exports = router;