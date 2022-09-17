import React, {createRef, useState, useEffect} from 'react';

function TodoApp(props) {
	let url = 'http://localhost:3003/todos';

	const [counter, setCounter] = useState(1)
	const [todos, setTodos] = useState([])

	const fetchTodos =fetch(url)
		.then(r=>{
			if(r.ok){
				return r.json()
			}
		})
		.then(data=> {
			// todos = data;
			// this.setState({todos:data})
			setTodos(data)
		})
		.catch( err=>console.warn(err) );


	const addTodo=(title)=>{
		console.log(`addtodo`);
		const newTodo = {
			title: title,
			completed: false,
		}

		fetch(url, {
			method:"Post",
			body:JSON.stringify(newTodo),
			headers:{
				"content-type":"application/json"
			}
		})
		.then(responese=>{
			if(responese.ok){
				return responese.json()
			}
		})
		.then(todo=>{
			// this.setState({
			// 	todos:[...this.state.todos,todo]
			// })
			setTodos([...todos,todo])
		})



		// console.log(`newTodo: ${newTodo}`);
	}

	const removeTodo=()=>{
		//...
	}

	const changeTodo=()=>{
		//
	}

	useEffect(fetchTodos,[])

	return (
		<div className="page">
			<header>Simple Todo App</header>
			<main className="todo-app">
			<TodoAdd addTodo={addTodo}/>
			<TodoList todos={todos}/>
			</main>
		</div>
	);
}

function TodoList({todos}) {
	return (
		<ul className="todo-list-items">
			{todos.map(todo=><li dataid={todo.id} key={todo.id}>
				<span>{todo.title}</span>
				<div className="removeTodo"><i className="far fa-trash-alt"></i></div>
			</li>)}
		</ul>
	);
}


function TodoAdd(props){
	let inputRef = createRef();
	const [value, setValue] = useState("")

	const clickHandler=(e)=>{
		props.addTodo(value)
		// this.state.value = ""
		// this.setState({value:""})
		setValue("")

		// focus input
		inputRef.current.focus()
	}

	return (
		<div className="todo-add">
			<input type="text"
				ref={inputRef}
				autoFocus
				placeholder="add new todo ..."
				value={value}
				onChange={(e)=>{setValue(e.target.value)}}
			/>
			<button
				className="todo-add-btn"
				onClick={clickHandler}
				type="button">Add {/*test*/}</button>
		</div>
	);
}



export default TodoApp;