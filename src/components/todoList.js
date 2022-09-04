
function TodoList(props) {

	const todos = props.todos;
	return <ul>
		{todos.map(todo=><TodoItem key={todo.id} {...todo}/> )}
	</ul>
}

function TodoItem(props) {
	console.dir(props);
	return <li>{props.title}</li>
}


export {TodoList}



