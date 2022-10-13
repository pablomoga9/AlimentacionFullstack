const pool = require('../utils/dbSQL');
require('dotenv').config();
const query = require('../models/queries');


const createUser = async (form) => {
    try {

        const data = await pool.query(query.createUser, [form.email, form.password]);

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

module.exports = {
    createUser,
    createBusiness,
    loginUser,
    getBusinessByEmail,
    getUserByEmail
}