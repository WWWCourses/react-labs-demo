import React from 'react';


const inputRef = React.createRef();

function getInputValue(e) {
	console.log(inputRef.current.value);

}

function GetInput(props) {
	return (
		<div>
			<input type="text" ref={inputRef}/>
			<button onClick={getInputValue}>OK</button>
		</div>

	);
}

export default GetInput;