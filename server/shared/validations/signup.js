import Validator from 'validator';

export default function validateInput(data) {
	let errors = {};
	if(Validator.isNull(data.username)) {
		errors.username = 'This field is required';
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if(Validator.isNull(data.email)) {
		errors.email = 'This field is required';
	}
	if(!Validator.equals(data.password, data.passwordConfirm)) {
		errors.passwordConfirm = 'Passwords must match';
	}
	if(Validator.isNull(data.password)) {
		errors.password = 'This field is required';
	}
	if(Validator.isNull(data.passwordConfirm)) {
		errors.passwordConfirm = 'This field is required';
	}
	
	if(Validator.isNull(data.timezone)) {
		errors.timezone = 'This field is required';
	}

	return{
		errors,
		isValid: isEmpty(errors) 
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