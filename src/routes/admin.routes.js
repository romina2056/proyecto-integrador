const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');
const adminControllers = require('../controllers/admin.controllers');


router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', upload.array('images', 2), adminControllers.createItem);
router.get('/edit/:id', adminControllers.editView);
router.put('/edit/:id', upload.array('images', 2), adminControllers.editDate);
router.delete('/delete/:id', adminControllers.delete);


module.exports = router;

