import React, {useContext, useEffect} from 'react';
import { Counter } from "./counterContext";

const Sibling1 = (props) => {
	const [val, setVal] = useContext(Counter);

	useEffect(()=>{
		console.log(`Effect run!`);
	},)

	return (
		<div>
			<div>Sibling1 {val}</div>
			<button onClick={() => setVal(prevVal=>prevVal+1)}>Click</button>
		</div>
	);
};

const Sibling2 = (props) => {
	const [val, setVal] = useContext(Counter);

	return (
		<div>
			<div>Sibling2 count: {val}</div>
			<button onClick={() => setVal(prevVal=>prevVal+1)}>Click</button>
		</div>
	);
};

export {Sibling1, Sibling2}