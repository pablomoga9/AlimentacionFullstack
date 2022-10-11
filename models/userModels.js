    const pool = require('../utils/dbSQL');
    require('dotenv').config();
    const query = require('../models/queries');

    const createUser = async(form)=>{
        try{
            const data = await pool.query(query.createUser,[form.email,form.password,form.role]);
            const results = data.rows
            return results;
        }
        catch(error){
            console.log(error);
        }
    }

    const createBusiness = async(form)=>{
        try{
            const data = await pool.query(query.createBusiness,[form.email,form.password,form.type]);
            const results = data.rows;
            return results;
        }
        catch(error){
            console.log(error);
        }
    }

    module.exports={
        createUser,
        createBusiness
    }