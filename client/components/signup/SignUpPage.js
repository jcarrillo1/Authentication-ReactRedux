import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignUp extends Component {
	render() {
		const { userSignUpRequest, addFlashMessage } = this.props;
		return(
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<div className="box">
						<SignUpForm addFlashMessage={addFlashMessage} userSignUpRequest={userSignUpRequest} />
					</div>
				</div>
			</div>
		);
	}
}

SignUp.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired
}


export default connect(null, { userSignUpRequest, addFlashMessage })(SignUp);