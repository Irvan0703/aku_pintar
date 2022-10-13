const router = require('express').Router();
const courseController = require('./controller')

router.get('/course',courseController.index);
router.post('/course',courseController.store);
router.put('/course/:id',courseController.updated);
router.delete('/course/:id',courseController.destruct)

module.exports = router;