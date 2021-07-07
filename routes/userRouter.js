const router = require('express').Router();
const userCtrl = require('../controllers/usersCtrl');

router.post('/register', userCtrl.register)

router.get('/refresh_token', userCtrl.refreshToken)

module.exports = router;