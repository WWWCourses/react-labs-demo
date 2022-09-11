import React from 'react';

class LifeCycleMethods extends React.Component {
	constructor(props){
		console.dir('constructor');
		super(props);
		this.state = {
			counter:1
		}

	}

	componentDidMount(){
		console.dir('componentDidMount');
	}

	componentDidUpdate(props, state){
		console.dir(`componentDidUpdate: counter = ${state.counter}` );
	}

	render() {
		return (
			<div>
				<button onClick={(e)=>this.setState((prevState)=>({counter:prevState.counter+1}))}>+</button>
				{/* <div>{this.state.counter}</div> */}
				<CounterOutput counter={this.state.counter}/>
			</div>
		);
	}
}

class CounterOutput extends React.Component {
	// should be statefull or not?

	render() {
		return (
			<div>Counter output: {this.props.counter}</div>
		);
	}
}

export default LifeCycleMethods;