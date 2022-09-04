import React from "react";

function FuncComp(props) {
	console.log(`props in FuncComp:`);
	console.dir(props);
	// with JS:
	const h1 = React.createElement("h1", null, "H1 created with JS");
	const div = React.createElement(
		"div",
		{
			id:'red'
		},
		h1
	);

	console.dir(div);

	// with JSX syntax:
	const realDiv = <div id="red">
		<h1>H1 created with JSX</h1>
	</div>

	console.dir(realDiv)

	return realDiv
}

export {FuncComp}