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
    logoutUser
}