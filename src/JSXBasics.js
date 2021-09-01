import React from 'react';


let innerHTML = "JSX Demo";
const tooltipStr = "Tooltip text";

function JSXBasics(props) {
	console.dir(props);
	// @ts-ignore
	return <div  title={tooltipStr} className="App" data-id="3" tabIndex="2" >{2+2} - {innerHTML}</div>;
}


export default JSXBasics;