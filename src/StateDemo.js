import React from "react";

function StateDemo(params) {
	return <Counter id="1"/>
}

// counter = new Counter();

// el = counter.render();


class Counter extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			'count':0,
			'id':props.id*1
		}

		console.dir(this)

		this.increment =  ()=> {
			console.dir(this)
			console.log(`Count: ${this.state.count}`);

			// this.state.count++;
			this.setState( (state, props)=>( {count: state.count+this.state.id} ) )
		}
	}

	render(){
		return (
			<div>
				<h1>Counter {this.props.id}</h1>
				<div className="count">{this.state.count}</div>
				<button onClick={this.increment}>+</button>
				<button>-</button>
			</div>
		);
	}
}

export default StateDemo;


