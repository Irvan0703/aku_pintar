const router = require('express').Router();
const userController = require('./controller')

router.post('/user',userController.store);
router.get('/user', userController.view);

module.exports = router;