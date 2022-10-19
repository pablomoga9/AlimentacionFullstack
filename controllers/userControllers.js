require('dotenv').config();
const userModels = require('../models/userModels')
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Obtener usuario por email
const getUserByEmail = async (req, res) => {
    let email = req.query.email;
    if (email) {
        try {
            let user = await userModels.getUserByEmail(email);
            console.log(user);
            res.status(200).json(user);
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({ "message": "User not found" });
        }
    }
}

//Opcional: comprobar que el correo no este registrado
const signUpUser = async (req, res) => {
    try {
        const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);


        if (req.body.role === "user") {
            const newBody = {
                email: req.body.email,
                password: hashPassword
            }

            const newUser = await userModels.createUser(newBody)
            res.status(200).json(newUser);
        }
        else {

            const newBody = {
                email: req.body.email,
                password: hashPassword,
                type: "restaurant"
            }

            const newUser = await userModels.createBusiness(newBody);
            res.status(200).json(newUser);
        }


    }
    catch (error) {
        res.status(400).json({ msg: error.response })
    }
}

const loginUser = async (req, res) => {
    try {
        const userData = await userModels.getUserByEmail(req.body.email);

        if (!userData) {
            const businessData = await userModels.getBusinessByEmail(req.body.email);
            if (!businessData) {
                res.status(200).json({ msg: "Usuario no encontrado" })
            }
            else {
                const password = businessData[0].password;
                const match = await bcrypt.compare(req.body.password, password);
                if (match) {
                    const businessToken = {
                        email: businessData[0].email,
                        check: true
                    }

                    const token = jwt.sign(businessToken, "secret", {
                        expiresIn: 10000
                    })
                    res.cookie("token", token, { httpOnly: true }).send()
                    return token
                }
                else {
                    res.status(400).json({ msg: "Usuario o contaseña incorrecta" });
                }
            }
        }
        else {
            const password = userData[0].password;
            const match = await bcrypt.compare(req.body.password, password);
            if (match) {
                const userToken = {
                    email: userData[0].email,
                    check: true
                }
                const token = jwt.sign(userToken, "secret", {
                    expiresIn: 10000
                })
                res.cookie("token", token, { httpOnly: true }).send()
                return token;
            }
            else {
                res.status(400).json({ msg: "Usuario o contaseña incorrecta" });
            }
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.response })
    }
}

const saveBooking = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({ msg: req.body });
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}

const createReview = async (req, res) => {
    try {
        res.status(200).json({ msg: req.body });
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}

//Obtener todos los restaurantes
const getRestaurants = async (req, res) => {
    if (req.query.id) {
        console.log("req query", req.query);
        try {
            const restaurant = await userModels.getRestaurantById(req.query.id);
            res.status(200).json(restaurant);
            console.log(restaurant, restaurant.length);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({ "message": "restaurant not found" });
        }
    } else {
        // all restaurants
        try {
            const resturants = await userModels.getRestaurants();
            res.status(200).json(resturants);
            console.log("All resturants", resturants.length);

        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({ "message": "Restaurants not found" });
        }
    }
}

//Obtener todas las tiendas
const getStores = async (req, res) => {
    if (req.query.id) {
        console.log("req query", req.query);
        try {
            const store = await userModels.getStoreById(req.query.id);
            res.status(200).json(store);
            console.log(store, store.length);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({ "message": "store not found" });
        }
    } else {
        // all restaurants
        try {
            const resturants = await userModels.getStores();
            res.status(200).json(resturants);
            console.log("All stores", resturants.length);

        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({ "message": "store not found" });
        }
    }
}

const getReviews = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}


const logoutUser = async (req, res) => {
    try {
        return res.clearCookie("token").send();
    }
    catch (error) {
        res.status(400).json({ msg: "could not logout" })
    }
}


const checkUser = async (req, res) => {
    try {
        res.status(200).json({ msg: req.headers.cookie })
    }
    catch (error) {
        res.status(400).json({ msg: error.response })
    }
}

module.exports = {
    getUserByEmail,
    signUpUser,
    loginUser,
    checkUser,
    logoutUser,
    saveBooking,
    createReview,
    getReviews,
    getRestaurants,
    getStores
}