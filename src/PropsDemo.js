import React from "react";

function foo(x) {
	console.log(x);
}

function PropsDemo(props) {
	return (
		<div>
			<h1 className="propsDemo">PropsDemo</h1>
			<Parent/>
		</div>
	)
}

function Parent(props) {
	const user = {
		name: "ada",
		age:23
	};

	return (
		<div>
			<ChildF name={user.name} age={user.age} />
			<ChildC name={user.name} age={user.age} />
		</div>
	)
}


function ChildF( {name} ) {
	return (
		<div>Welcome, {name}</div>
	)
}

class ChildC extends React.Component{
	render(){
		return <div>Welcome, {this.props.name}</div>
	}
}



export default PropsDemo