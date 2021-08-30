import React from 'react';


let innerHTML = "JSX Demo";
const tooltipStr = "Tooltip text";

function JSXBasics(props) {
	console.dir(props);
	return <div  title={tooltipStr} class="App" data-id="3" >{2+2} - {innerHTML}</div>;
}


export default JSXBasics;