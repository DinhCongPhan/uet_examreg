const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const readExcel = require('convert-excel-to-json');
const multer = require('multer');

const User = require('../model/user');


let message = "";

const user_router = express.Router();
user_router.use(cors());

/*user_router.post('/register', (request, response) => {

    let userData = {
      userID: request.body.userID,
      username: request.body.username,
      password: request.body.password,
      email: request.body.email,
      role: request.body.role
    }
    User.findOne({
      where: {
        username: request.body.username
      }
    }).then(user => {
      if(!user) {
        bcrypt.hash(request.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData).then(user => {
            response.json({status: 'Registered'});
          })
              .catch(err =>{
                response.send('error:' + err);
              })
          })
       }
      else{
        response.json({error: 'User existed'});
      }
    })
})



user_router.post('/login', (request, response) => {
    User.findOne({
        where: {
            username: request.body.username
        }
    }).then(user => {
        if(user) {
            if(bcrypt.compareSync(request.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn : 1440
                })

                if(user.dataValues.role === 'student'){
                      message = "Đăng nhập thành công!"
                     return response.redirect('student/home');
                }
                else {
                    message = "Đăng nhập thành công!"
                    return response.redirect('admin/home');
                }

              //  response.send({token : token});


user_router.get('/logout', (request, response) =>{

})*/


module.exports = user_router;
