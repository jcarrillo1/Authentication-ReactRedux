import express from 'express';
import Validator from 'validator';

let router = express.Router();

function validateInput(data) {
	let err = {};

	if(Validator.isNull(data.username)) {
		err.username = 'This field is required';
	}
	if(!Validator.isEmail(data.email)) {
		err.email = 'Email is invalid';
	}
	if(Validator.isNull(data.email)) {
		err.email = 'This field is required';
	}
	if(!Validator.equals(data.password, data.passwordConfirm)) {
		err.passwordConfirm = 'Passwords must match';
	}
	if(Validator.isNull(data.password)) {
		err.password = 'This field is required';
	}
	if(Validator.isNull(data.passwordConfirm)) {
		err.passwordConfirm = 'This field is required';
	}
	
	if(Validator.isNull(data.timezone)) {
		err.timezone = 'This field is required';
	}

	return{
		err,
		isValid: isEmpty(err) 
	}
}

function isEmpty(object) {
  for(var key in object) {
    if(object.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}

router.post('/', (req, res) => {
	console.log(req.body);
	const { err, isValid } = validateInput(req.body);
	if(!isValid) {
		return res.status(400).json(err);
	} else {
		return res.status(200).json({"success":true})
	}

});

export default router;