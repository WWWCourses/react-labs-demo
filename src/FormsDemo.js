import React from "react";

class FormsDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"userName": ""
		}
	}


	clickHandler =(e)=>{
		e.preventDefault();
		console.log(`hi`);
	}

	changeHandler = (e)=>{
		// console.log( e.target.value);
		this.setState( {"userName":e.target.value} )
	}

	render() {
	return (
		<form onSubmit={this.handleSubmit}>
			<label>
				Name:
				<input type="text" onChange={this.changeHandler} id="userName" />
			</label>
			<button onClick={this.clickHandler}>Show Data</button>
			<hr />
			{false || <div className="output" >{this.state.userName}</div>}
		</form>
	);
	}

}

export default FormsDemo;
