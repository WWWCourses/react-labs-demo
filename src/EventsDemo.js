import React from "react";

class EventsDemo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userName:"ada"
		}

		// bound event handlers (variant 1)
		this.clickHandler = this.clickHandler.bind(this);
	}


	greet(){
		console.log(`Hello`);
	}

	clickHandler(e) {
		this.setState((state, props)=> ({
			"userName":state.userName.toUpperCase()
		}) );


		console.dir(<div className="output">{this.state.userName}</div>)
	}

	onChangeHandler = (e)=>{
		// console.dir(e);
		// console.dir(this);

		// this.greet();
	}


	render(){
		return (
			<div>
				<h1>EventsDemo</h1>
				{/* <label>name: <input type="text" onChange={ this.onChangeHandler } placeholder="Enter your name"/></label> */}
				<button onClick={this.clickHandler}>OK</button>
				<div className="output">{this.state.userName}</div>
			</div>
		)
	}
}


export default EventsDemo;