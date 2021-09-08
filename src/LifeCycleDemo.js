import React from "react";

class Welcome extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			userName: "Byron"
		}

		console.log(`constructor`)
	}


	componentDidMount(){
		console.log(`componentDidMount`);
	}

	render(){
		return (
			<div>{this.state.userName}</div>
		)
	}
}

export default Welcome;