import { Component } from "react";

function Parent(props) {
	return ( <Child id="p1" userName={props.userName}>@@@@</Child> );
}

// function Child(props) {
// 	console.log(props);
// 	return ( <div>Child</div> );
// }

class Child extends Component {
	constructor(props){
		super(props)
		// this.props = props
	}

	render() {
		console.log(this.props);
		this.props.userName = "Pesho";
		return (<div>Hello, {this.props.userName}</div>);
	}
}

export default Parent;