import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import timezones from '../../data/timezones';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirm: '', 
			timezone: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.userSignUpRequest(this.state);
	}
	render() {
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
				/>
				<TextField 
					name="email"
					type="email"
					hintText="Email"
					floatingLabelText="Email"
					fullWidth={true}
					value={this.state.email}
					onChange={this.onChange}
				/>
				<TextField 
					name="password"
					type="password"
					hintText="Password"
					floatingLabelText="Password"
					fullWidth={true}
					value={this.state.password}
					onChange={this.onChange}
				/>
				<TextField 
					name="passwordConfirm"
					type="password"
					hintText="Re-type Password"
					floatingLabelText="Password Confirmation"
					fullWidth={true}
					value={this.state.passwordConfirm}
					onChange={this.onChange}
				/>
				<br /><br />
				<div className="form-group">
					<select 
						className="form-control" 
						name="timezone" 
						onChange={this.onChange} 
						value={this.state.timezone} >
						<option value="" disabled>Choose your timezone</option>
						{options}
					</select>
				</div>
				<RaisedButton 
					label="Sign Up" 
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
