const {register, login, logout } = require('../controllers/userController.js');
const router = require('express').Router(); 

router.post("/register", register);
router.post("/login", login);
router.get("/logout/:id", logout);

module.exports = router