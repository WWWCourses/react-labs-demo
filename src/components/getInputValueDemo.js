import React from 'react';


class GetInput extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			inputVal: "",
			x:0
		}
		// this.inputRef = React.createRef();
		this.getInputValue = this.getInputValue.bind(this);
		this.keyPressHandler = this.keyPressHandler.bind(this);
	}

	getInputValue(e) {
		// this.setState({inputVal:this.inputRef.current.value})
		// this.inputRef.current.value="";
		// this.inputRef.current.focus();
	}

	keyPressHandler(e){
		console.dir(e);

		// TODO: why not getting prev state
		this.setState((prevState)=>{
			console.dir(prevState);
			return {
				inputVal:prevState.inputVal,
				x:prevState.x+1
			}
		})
	}

	render(){
		return (
			<div>
				{/* <input type="text" ref={this.inputRef}/> */}
				<input type="text" onKeyPress={this.keyPressHandler}/>
				<button onClick={this.getInputValue}>OK</button>
				<div>output: {this.state.inputVal}, keypressed: {this.state.x}</div>
			</div>
		)
	}
}

export default GetInput;