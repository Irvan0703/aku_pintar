const router = require('express').Router();
const majorController = require('./controller')

router.get('/major',majorController.index);
router.post('/major',majorController.store);
router.put('/major/:id',majorController.updated);
router.delete('/major/:id',majorController.destruct)

module.exports = router;