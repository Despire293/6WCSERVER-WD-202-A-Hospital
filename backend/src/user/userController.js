var userService = require('./userService');


var getUserControllerFn = async(req,res) => {
    var users =await userService.getUserDBService();
    res.send({'status':true, 'data': users})
}


var createUserControllerFn = async(req,res) => {

    try {
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);

        if (status) {
            res.send({"status":true, "message": "User Account is Created"});
        }
        else {
            res.send({"status":false, "message": "Creation Failed!"});
        }
    }
    catch(err) {
        console.log(err);
    }
}

var loginUserControllerFn = async (req,res) => {
    var result = null;

    try {
        result = await userService.loginUserDBService(req.body);
        if (result.status) {
            res.send({"status": true, "message": result.msg})
        }
        else {
            res.send({"status": false, "message": result.msg});
        }
    }
    catch (error) {
        console.log(error);
        res.send({"status": false, "message": error.msg})
    }
}

var updateUserControllerFn = async (req,res) => {
    console.log(req.params.email);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.email,req.body);

    if (result) {
        res.send({'status': true, 'message': "Updated Password"});
    }
    else {
        res.send({'status': false, 'message': 'false to update your password'})
    }
}
module.exports = {createUserControllerFn,loginUserControllerFn,updateUserControllerFn,getUserControllerFn};