const router = require('express').Router();
const userCtrl = require('../controllers/usersCtrl');

router.post('/register', userCtrl.register)

module.exports = router;