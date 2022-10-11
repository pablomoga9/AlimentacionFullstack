require('dotenv').config();
const userModels = require('../models/userModels')
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUpUser = async(req,res)=>{
    try{
        const hashPassword = bcrypt.hashSync(req.body.password);
        const newBody = {
            email:req.body.email,
            password:hashPassword,
            role:null
        }
        if(req.body.role="user"){
            newBody.role = "user";
            console.log(newBody);
            const newUser = await userModels.createUser(newBody)
        }
        else{
            newBody = {
                email:req.body.email,
                password:hashPassword,
                type:"restaurant"
            }
            console.log(newBody);
            const newUser = await userModels.createBusiness(newBody);
        }
        
        
    }
    catch(error){
        res.status(400).json({msg:"could not create user"})
    }
}

module.exports={
    signUpUser
}