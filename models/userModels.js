const pool = require('../utils/dbSQL');
require('dotenv').config();
const query = require('../models/queries');


const createUser = async (form) => {
    try {

        const data = await pool.query(query.createUser, [form.email, form.password, form.name, form.artesanal, form.basura0, form.km0, form.organico, form.productosFrescos, form.productosTemporada, form.saludable, form.sostenible, form.vegano, form.vegetariano]);
        console.log("Models ", data);
        const results = data.rows
        return results;
    }
    catch (error) {
        res.staus(400).json({ msg: error.response })
    }
}

const createBusiness = async (form) => {
    try {
        const data = await pool.query(query.createBusiness, [form.email, form.password, form.type]);
        const results = data.rows;
        return results;
    }
    catch (error) {
        res.staus(400).json({ msg: error.response })
    }
}

const loginUser = async (req, res) => {
    try {

    }
    catch (error) {
        res.staus(400).json({ msg: error.response })
    }
}

const getUserByEmail = async (e) => {
    try {
        const data = await pool.query(query.getUserByEmail, [e]);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}
const getBusinessByEmail = async (e) => {
    try {
        const data = await pool.query(query.getBusinessByEmail, [e]);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}


const getRestaurants = async (e) => {
    try {
        const data = await pool.query(query.getRestaurants);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}

const getRestaurantById = async (id) => {
    try {
        const data = await pool.query(query.getRestaurantById, [id]);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}


const getStores = async (e) => {
    try {
        const data = await pool.query(query.getStores);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}

const getStoresById = async (id) => {
    try {
        const data = await pool.query(query.getRestaurantById, [id]);
        const result = data.rows;
        return result;
    }
    catch (error) {
        res.status(400).json({ msg: error.stack })
    }
}


module.exports = {
    createUser,
    createBusiness,
    loginUser,
    getBusinessByEmail,
    getUserByEmail,
    getRestaurants,
    getRestaurantById,
    getStores,
    getStoresById
}