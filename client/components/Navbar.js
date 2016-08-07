import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: window.innerWidth
		}
		this.tabs = this.tabs.bind(this);
		this.homeClick = this.homeClick.bind(this);
	}
	tabs() {
		return (
			<div>
				<FlatButton 
					style={{ color: 'white' }} 
					label="Sign Up" 
					containerElement={<Link to="/signup" />}
				/>
			</div>
		);
	}
	homeClick() {
		console.log("Nope");
		// browserHistory.push("/");
	}
	handleResize() {
	    this.setState({windowWidth: window.innerWidth});
	  }

	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize.bind(this));
	}
	render() {
		let navigationBar;
		if(this.state.windowWidth > 600) {
			return (
				<AppBar
		    		title={<Link style={{color:"white", textDecoration:"none"}} to="/">Example</Link>}
		    		showMenuIconButton={ false }
		    		iconElementRight={ this.tabs() } 
		    	/>
			);
		} else {
			return (
				<AppBar
		    		title="Red Dice"
		    		onTitleTouchTap={this.homeClick()}
		    		showMenuIconButton={ true } 
		    	/>
			);
		}
	}
}

export default Navbar;
