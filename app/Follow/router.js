const router = require('express').Router();
const followController = require('./controller')

router.get('/follow',followController.index);
router.post('/follow',followController.store);
router.put('/follow/:id',followController.updated);
router.delete('/follow/:id',followController.destruct)

module.exports = router;