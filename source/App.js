import React, { Component } from 'react';

class Hello extends Component {
	render() {
		var place = "World";
		return (
			<h1>Hello {place}</h1>
		);
	}
}

class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1">Pain</ListItem>
				<ListItem quantity="6">Oeufs</ListItem>
				<ListItem quantity="2">Lait (litre)</ListItem>
			</ul>
		);
	}
}

class ListItem extends Component {
	render() {
		return (
			<li>
				{this.props.quantity} x {this.props.children}
			</li>
		);
	}
}

React.render(<GroceryList />, document.getElementById('root'));