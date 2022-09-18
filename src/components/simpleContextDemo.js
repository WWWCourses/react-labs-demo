import React, {useState, useContext} from 'react';

const CounterContext = React.createContext()
const ThemeContext = React.createContext()

function ContextDemo(props) {
	const [count, setCount] = useState(1)

	const darkTheme = {
		"backgroundColor":"#000",
		"color":"#FFF"
	}

	return ( <div>
		<button onClick={(e)=>setCount(prevCount=>prevCount+1)}>+</button>
		<div>Count: {count}</div>
		<CounterContext.Provider value={count}>
			<ThemeContext.Provider value={darkTheme}>
				<Comoponent1/>
				<Comoponent2/>
			</ThemeContext.Provider>
		</CounterContext.Provider>
	</div> );
}

function Comoponent1(props) {
	const count = useContext(CounterContext)
	const theme = useContext(ThemeContext)

	return ( <div>
		<div>
			<h3 style={theme}>Component 1 count: {count}</h3>
		</div>
	</div> );
}



function Comoponent2(props) {
	const count = useContext(CounterContext)
	const theme = useContext(ThemeContext)

	return ( <div>
		<div>
			<h3 style={theme}>Component 2 count: {count}</h3>
		</div>
	</div> );
}

export default ContextDemo;