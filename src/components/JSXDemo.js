import React from "react";

function JSXDemo(props) {
	// const x = 4;
	// let status="";

	// if(x%2){
	// 	status = "odd"
	// }else{
	// 	status="even"
	// }

	// return <div>{x} is {x%2?"odd":"even"}!
	// </div>

	// if(x%2){
	// 	return <div>{x} is odd</div>
	// }else{
	// 	return <h1>{x} is even</h1>
	// }

	/* ---------------- if x is even => make it red, else => blue --------------- */
	// const x = 5;
	// return <div id={x%2?"blue":"red"}>{x%2?"odd":"even"}</div>


	/* -------------------------------- atributes ------------------------------- */
	return <div>
		<div className="red" tabIndex="1">d1</div>
		<div class="red" tabIndex="2">d2</div> {/*not OK*/}
		<div className="red" tabIndex="3">d3</div>
	</div>
}

export {JSXDemo}


