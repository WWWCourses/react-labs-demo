import React from 'react';

class TodoApp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			todos: [],
		}
	}

	componentDidMount(){
		// fetch initial todos
		const url = 'https://jsonplaceholder.typicode.com/todos'
		fetch(url)
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
			id:this.state.todos.length+1,
			title: title,
			completed: false,
		}

		this.setState({
			todos:[...this.state.todos,newTodo]
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
	}

	render() {
		return (
			<div className="todo-add">
				<input type="text"
					autoFocus
					placeholder="add new todo ..."
					onChange={(e)=>{this.setState({value:e.target.value})}}/>
				<button
					className="todo-add-btn"
					onClick={(e)=>{this.props.addTodo(this.state.value)}}
					type="button">Add</button>
			</div>
		);
	}
}



export default TodoApp;