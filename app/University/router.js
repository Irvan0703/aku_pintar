const router = require('express').Router();
const universityController = require('./controller')

router.get('/university',universityController.index);
router.post('/university', upload.array('image_univ'), productController.store);
router.put('/university/:id',upload.array('image_univ'), universityController.update);
router.delete('/university/:id', universityController.destruct);

module.exports = router;