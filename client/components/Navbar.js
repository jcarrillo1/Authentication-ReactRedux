import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: window.innerWidth
		}
		this.tabs = this.tabs.bind(this);
	}
	tabs() {
		return (
			<div>
				<FlatButton style={{ color: 'white' }} label="Tab1" />
				<FlatButton style={{ color: 'white' }} label="Tab2" />
				<FlatButton style={{ color: 'white' }} label="Tab3" />
				<FlatButton style={{ color: 'white' }} label="Tab4" />
			</div>
		);
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
		    		title="Example"
		    		showMenuIconButton={ false }
		    		iconElementRight={ this.tabs() } 
		    	/>
			);
		} else {
			return (
				<AppBar
		    		title="Example"
		    		showMenuIconButton={ true } 
		    	/>
			);
		}
	}
}

export default Navbar;
