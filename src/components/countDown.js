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

	componentDidMount(){
		this.tick()
	}

	tick(){
		let timerID = setInterval(() => {
			// if(this.state.seconds===0){
			// 	clearInterval(timerID)
			// }else{
			// 	this.setState((prevState)=>({seconds:prevState.seconds-1}))
			// }

			this.setState((prevState)=>{
				if(prevState.seconds===0){
					clearInterval(timerID)
					return prevState
				}else{
					return {seconds:prevState.seconds-1}
				}
			})

		}, 1000);
	}

	render() {
		return (
			<div>
				{this.state.seconds}
			</div>
		);
	}
}


export default CountDown;