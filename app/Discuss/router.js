const router = require('express').Router();
const discussController = require('./controller')

router.get('/discuss',discussController.index);
router.post('/discuss',discussController.store);
router.put('/discuss/:id',discussController.updated);
router.delete('/discuss/:id',discussController.destruct)

module.exports = router;