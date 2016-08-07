import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
	componentDidUpdate() {
    	componentHandler.upgradeDom();
  	}
	render() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
}

export default App;
