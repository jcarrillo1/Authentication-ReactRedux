import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}
	render() {
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
				<RaisedButton 
					label="Sign Up" 
					primary={true} 
					fullWidth={true} 
					style={{margin:12}} 
					onClick={this.onSubmit}
				/>
			</form>
		);
	}
}

export default SignUpForm;
