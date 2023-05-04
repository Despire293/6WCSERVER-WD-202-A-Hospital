var userModel = require('./userModel');

var key = '123456789trytryrtyr';

var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {
        
        var userModelData = new userModel(); {

            userModelData.firstname = userDetails.firstname;
            userModelData.lastname = userDetails.lastname;
            userModelData.email = userDetails.email;
            userModelData.password = userDetails.password;

            userModelData.save(function resultHandle(error, result)
            
            {

                if (error) {
                    reject(false);
                }
                
                else {
                    resolve(true);
                }
            })
        }
    })

}

module.exports.loginUserDBService = (userDetails) => 
{
    return new Promise(function myFn(resolve,reject) {
        userModel.findOne({email: userDetails.email}, function scanresult(errorvalue, result) {
            if(errorvalue) 
            {
                reject({status: false, msg: "WRONG EMAIL!"})
            }
            else 
            {
                if (result != undefined && result != null) {

                    if(result.password == userDetails.password) {
                        resolve({status: true,msg: "Login Validated"});
                    }
                    else 
                    {
                        reject({status:false,msg: "Invalid Inputs"});
                    }
                }
                else 
                {
                    reject({status: false,msg :"Invalid Inputs"});
                }
            }
        })
    })
}

module.exports.updateUserDBService = (email,userDetails) => {
    console.log(userDetails);

    return new Promise(function myFn(resolve,reject) {
        userModel.findOneAndUpdate(email,userDetails, function updateData(error,result) {
            if(error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        })
    })
}

module.exports.getUserDBService = () =>
{
    return new Promise(function myFn(resolve,reject) {
        userModel.find({}, function check(error,result)
        {

            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        })
    })
}