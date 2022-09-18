import React, { useContext, useState } from "react";

const Counter = React.createContext();
console.dir(Counter);

const CounterContextWrapper=(props) => {
	const [val, setVal] = useState(1);

	return (
		<Counter.Provider value={[val, setVal]}>
			{props.children}
		</Counter.Provider>
	);
}

export default CounterContextWrapper
export {Counter}