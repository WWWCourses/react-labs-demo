import React from 'react';

class  StateAndEventsDemo extends React.Component {
	state = {
		x:1,
		y:9
	}

	constructor(props){
		super(props)
		this.increment=this.increment.bind(this);
	}

	increment(e){
		console.log(`Increment called!`);
		console.log(e.target);

	}

	render() {
		return (
			<div>
				<div onClick={this.increment}>
					<button>+</button>
					<div className='btn'>-</div>
				</div>
				{this.state.x}
			</div>
		);
	}
}

export default StateAndEventsDemo