//An example over https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
// ...or where/how to set the initial state with hooks

import React, {useState} from "react";

function HooksDemo(props) {
	console.log(`HooksDemo called - Do not do initial intesive operations here! It will be called on all subsequent renders`);

	const [count, setCount]=useState(()=>{
		console.log(`*** useState called - and it will be called only once - at initial render! ***`);
		return 0;
	});

	return (
		<>
			<button onClick={()=>setCount(count+1)}>Click me!</button>
			<div>You clicked: {count} times. But this doesn't matter. Just keep on clicking and analyze the logs...</div>
		</>
	)
}

export default HooksDemo;