import React, {createRef} from 'react';

class TodoApp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			todos: [],
		}
		this.url = 'http://localhost:3003/todos'
	}

	componentDidMount(){
		// fetch initial todos

		fetch(this.url)
			.then(r=>{
				if(r.ok){
					return r.json()
				}
			})
			.then(data=> {
				// todos = data;
				this.setState({todos:data})
			})
			.catch( err=>console.warn(err) );
	}

	addTodo=(title)=>{
		console.log(`addtodo`);
		const newTodo = {
			title: title,
			completed: false,
		}

		fetch(this.url, {
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
			this.setState({
				todos:[...this.state.todos,todo]
			})
		})



		// console.log(`newTodo: ${newTodo}`);
	}

	removeTodo=()=>{
		//...
	}

	changeTodo=()=>{
		//
	}

	render() {
		return (
			<div className="page">
				<header>Simple Todo App</header>
				<main className="todo-app">
				<TodoAdd addTodo={this.addTodo}/>
				<TodoList todos={this.state.todos}/>
				</main>
			</div>
		);
	}
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


class TodoAdd extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value:""
		}

		this.inputRef = createRef()
	}

	clickHandler=(e)=>{
		this.props.addTodo(this.state.value)
		// this.state.value = ""
		this.setState({value:""})

		// focus input
		this.inputRef.current.focus()
	}

	render() {
		return (
			<div className="todo-add">
				<input type="text"
					ref={this.inputRef}
					autoFocus
					placeholder="add new todo ..."
					value={this.state.value}
					onChange={(e)=>{this.setState({value:e.target.value})}}
				/>
				<button
					className="todo-add-btn"
					onClick={this.clickHandler}
					type="button">Add {/*test*/}</button>
			</div>
		);
	}
}



export default TodoApp;