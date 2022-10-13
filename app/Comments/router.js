const router = require('express').Router();
const commentController = require('./controller')

router.get('/alumni',commentController.index);
router.post('/alumni',commentController.store);
router.put('/alumni/:id',commentController.updated);
router.delete('/alumni/:id',commentController.destruct)

module.exports = router;