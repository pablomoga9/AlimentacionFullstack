require('dotenv').config();
const userModels = require('../models/userModels')
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUpUser = async(req,res)=>{
    try{
        
        const hashPassword = bcrypt.hashSync(req.body.password,saltRounds);
        
        
        if(req.body.role==="user"){
            const newBody = {
                email:req.body.email,
                password:hashPassword
            }
            
            const newUser = await userModels.createUser(newBody)
        }
        else{
           
           const newBody = {
            email:req.body.email,
            password:hashPassword,
            type:"restaurant"
           }
           
            const newUser = await userModels.createBusiness(newBody);
        }
        
        
    }
    catch(error){
        res.status(400).json({msg:error.response})
    }
}

const loginUser = async(req,res)=>{
    try{
      const userData = await userModels.getUserByEmail(req.body.email);
      
      if(!userData){
        const businessData = await userModels.getBusinessByEmail(req.body.email);
        if(!businessData){
            res.status(200).json({msg:"Usuario no encontrado"})
        }
        else{
            const password = businessData[0].password;
            const match = await bcrypt.compare(req.body.password,password);
            if(match){
                const businessToken = {
                    email:businessData[0].email,
                    check:true
                }

                const token = jwt.sign(businessToken,"secret",{
                    expiresIn:10000
                })
                res.cookie("token",token,{httpOnly:true}).send()
                return token
            }
            else{
                res.status(400).json({ msg: "Usuario o contaseña incorrecta" });
            }
        }
      }
      else{
        const password = userData[0].password;
        const match = await bcrypt.compare(req.body.password,password);
        if(match){
            const  userToken = {
                email:userData[0].email,
                check:true
            }
            const token = jwt.sign(userToken,"secret",{
                expiresIn:10000
            })
            res.cookie("token",token,{httpOnly:true}).send()
            return token;
        }
        else{
            res.status(400).json({ msg: "Usuario o contaseña incorrecta" });
        }
      }  
    }
    catch(error){
        res.status(400).json({msg:error.response})
    }
}

module.exports={
    signUpUser,
    loginUser
}