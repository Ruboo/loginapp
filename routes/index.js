var express = require('express');
var router = express.Router();

//get homepage

router.get('/',unsureAuthentificated);

function unsureAuthentificated(req,res,next){
    if(req.isAuthenticated()){
        return res.render('index')
    }else{
        //req.flash('error_msg','You are not logged in');
        return res.redirect('/users/login');
    }

}
module.exports = router;