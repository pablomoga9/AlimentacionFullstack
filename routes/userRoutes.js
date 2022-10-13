const routes = require('express').Router();
const userController = require('../controllers/userControllers');


routes.post('/login', userController.loginUser);
routes.post('/signup', userController.signUpUser);
routes.get('/logout', userController.logoutUser);
routes.get('/checkUser', userController.checkUser)
routes.get('/getUser', userController.getUserByEmail)
//Editar usuario


module.exports = routes;