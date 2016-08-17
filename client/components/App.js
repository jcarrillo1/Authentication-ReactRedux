import React, { Component } from 'react';
import Navbar from './Navbar';
import FlashMessageList from './flash/FlashMessagesList';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<FlashMessageList />
				{ this.props.children }
			</div>
		);
	}
}

export default App;
