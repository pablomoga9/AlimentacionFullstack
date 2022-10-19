const routes = require('express').Router();
const userController = require('../controllers/userControllers');

// rutas user
routes.post('/login', userController.loginUser);
routes.post('/signup', userController.signUpUser);
routes.get('/logout', userController.logoutUser);
routes.get('/checkUser', userController.checkUser)
routes.get('/getUser', userController.getUserByEmail)


// rutas restaurantes
routes.get('/restaurant', userController.getRestaurants)//Traer lista de restaurantes
routes.post('/saveBooking/:email', userController.saveBooking);
routes.get('/restaurant/:name', userController.getReviews)//Traer lista de reseñas de restaurante
routes.post('/restaurant/:name', userController.createReview);//Crear reseña

//Rutas tiendas
routes.get('/store', userController.getStores)//Traer lista de restaurantes


module.exports = routes;