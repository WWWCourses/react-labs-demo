import React from 'react';

// function CountDown(props) {
// 	console.log(`CountDown called!`);

// 	let seconds = 3;// must be in the state

// 	setInterval(() => {
// 		seconds-=1;
// 		console.log(`seconds = ${seconds}`);
// 	}, 1000);



// 	return (
// 		<div>
// 			{seconds}
// 		</div>
// 	)

// }

class CountDown extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			seconds:3
		}
	}

	tick(){
		let timerID = setInterval(() => {
			// this.state.seconds-=1;// do not change state like that
			this.setState({seconds:this.state.seconds-1})

			// When "seconds" is 0 => clearInterval(timerID);
			if(this.state.seconds===0){
				clearInterval(timerID)
			}
		}, 1000);


	}

	render() {
		this.tick();
		return (
			<div>
				{this.state.seconds}
			</div>
		);
	}
}


export default CountDown;