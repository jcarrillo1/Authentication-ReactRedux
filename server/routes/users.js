import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);
	if(!isValid) {
		return res.status(400).json(errors);
	} else {
		return res.status(200).json({"success":true})
	}
});

export default router;