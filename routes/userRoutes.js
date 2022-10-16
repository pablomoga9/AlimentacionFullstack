const routes = require('express').Router();
const userController = require('../controllers/userControllers');


routes.post('/login', userController.loginUser);
routes.post('/signup', userController.signUpUser);
routes.post('/saveBooking/:email',userController.saveBooking);
routes.get('/restaurant/:name',userController.getReviews)//Traer lista de reseñas de restaurante
routes.post('/restaurant/:name',userController.createReview);//Crear reseña
routes.get('/logout', userController.logoutUser);
routes.get('/checkUser', userController.checkUser)
routes.get('/getUser', userController.getUserByEmail)
//Editar usuario


module.exports = routes;