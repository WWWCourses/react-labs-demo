const numbers = [1,2,3]

function JSXLists(props) {
	return (
		<ul>
			{
				numbers.map( (number, idx)=><Item key={idx} number={number}/> )
			}
		</ul>
	)
}


function Item(props) {
	return (
		<li >{"Item" + props.number}</li>
	)
}

export default JSXLists;