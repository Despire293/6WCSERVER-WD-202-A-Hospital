var express = require('express');

var userController = require('../src/user/userController');
let medModel = require('../src/user/medicmodel');
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update-password/:email').patch(userController.updateUserControllerFn);
router.route('/user/get').get(userController.getUserControllerFn);


router.route('/med').get((req, res, next) => {
    medModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 router.route('/med-update/:id').put((req, res, next) => {
  medModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Medic successfully updated!')
    }
  })
})

router.route('/med/:id').get((req, res, next) => {
  medModel.findById(req.params.id, (error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})

router.route('/med-delete/:id').delete((req, res, next) => {
  medModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

router.route('/med-create').post((req, res, next) => {
  medModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});



module.exports = router;