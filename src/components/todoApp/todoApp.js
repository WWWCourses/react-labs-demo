import React, {createRef, useState, useEffect, useContext} from 'react';
import {TodosContex} from "./todosContext";

function TodoApp(props) {
	const {setTodos, fetchTodos} = useContext(TodosContex)

	// componentDidMount, componentDidUpdate, and componentWillUnmount
	// useEffect(fetchTodos)

	// componentDidMount,
	// TODO: eslint warning...
	useEffect(fetchTodos, [])

	return (
		<div className="page">
			<header>Simple Todo App</header>
			<main className="todo-app">
				<TodoAdd/>
				<TodoList/>
			</main>
		</div>
	);
}

function TodoList(props) {
	const {todos,removeTodo} = useContext(TodosContex)
	return (
		<ul className="todo-list-items">
			{todos.map(todo=><li dataid={todo.id} key={todo.id}>
				<span>{todo.title}</span>
				<div className="removeTodo" onClick={e=>removeTodo(todo.id)}><i className="far fa-trash-alt"></i></div>
			</li>)}
		</ul>
	);
}


function TodoAdd(props){
	let inputRef = createRef();
	const [value, setValue] = useState("")
	const {addTodo} = useContext(TodosContex)

	const clickHandler=(e)=>{
		addTodo(value)
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