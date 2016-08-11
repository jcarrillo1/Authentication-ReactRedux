import React, { Component } from 'react';
import classnames from 'classnames';
import { TextField, RaisedButton } from 'material-ui';
import timezones from '../../data/timezones';
import validateInput from '../../../server/shared/validations/signup';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirm: '', 
			timezone: '',
			errors: {},
			isLoading: false
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.isValid = this.isValid.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		if(this.isValid()) {
			this.setState({ errors: {}, isLoading: true })
			this.props.userSignUpRequest(this.state)
				.then(() => {
					console.log("Cool");
				})
				.catch((err) => {
					console.log([err.response.data]);
					this.setState({ errors: err.response.data, isLoading: false });
				});
		}
		
	}
	isValid() {
		const {errors, isValid } = validateInput(this.state);
		if(!isValid) {
			this.setState({errors});
		}

		return isValid;
	}
	render() {
		const {errors} = this.state;
		const options = Object.keys(timezones).map( (val, index) => {
			return <option key={index} value={val}>{val}</option>;
		});
		return (
			<form onSubmit={this.onSubmit}>
				<h3>Join our community!</h3>
				<TextField 
					name="username"
					hintText="Username"
					floatingLabelText="Username"
					fullWidth={true}
					value={this.state.username}
					onChange={this.onChange}
					errorText={errors.username}
				/>
				<TextField 
					name="email"
					type="email"
					hintText="Email"
					floatingLabelText="Email"
					fullWidth={true}
					value={this.state.email}
					onChange={this.onChange}
					errorText={errors.email}
				/>
				<TextField 
					name="password"
					type="password"
					hintText="Password"
					floatingLabelText="Password"
					fullWidth={true}
					value={this.state.password}
					onChange={this.onChange}
					errorText={errors.password}
				/>
				<TextField 
					name="passwordConfirm"
					type="password"
					hintText="Re-type Password"
					floatingLabelText="Password Confirmation"
					fullWidth={true}
					value={this.state.passwordConfirm}
					onChange={this.onChange}
					errorText={errors.passwordConfirm}
				/>
				<br /><br />
				<div className={classnames('form-group', { 'has-error': errors.timezone})}>
					<select 
						className="form-control" 
						name="timezone" 
						onChange={this.onChange} 
						value={this.state.timezone} >
						<option value="" disabled>Choose your timezone</option>
						{options}
					</select>
					{errors.timezone && <span className='help-block'>{errors.timezone}</span>}
				</div>
				<RaisedButton 
					label="Sign Up"
					disabled={this.state.isLoading} 
					primary={true} 
					fullWidth={true} 
					onClick={this.onSubmit}
				/>
			</form>
		);
	}
}

SignUpForm.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired
}

export default SignUpForm;
