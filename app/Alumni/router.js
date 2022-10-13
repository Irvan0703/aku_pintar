const router = require('express').Router();
const alumniController = require('./controller')

router.get('/alumni',alumniController.index);
router.post('/alumni', upload.single('alumnus_image'), productController.store);
router.put('/alumni/:id', alumniController.update);
router.delete('/alumni/:id', alumniController.destruct);

module.exports = router;