import React, {useState, useContext} from 'react';

const TodosContex = React.createContext()
const url = 'http://localhost:3003/todos';

function TodosContexWrapper(props) {
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
	}

	const removeTodo=(id)=>{
		fetch(`${url}/${id}`,{method:"DELETE"})
			.then(r=>{
				if(r.ok){
					setTodos(...)
				}
			})
	}


	const fetchTodos = ()=>{
		fetch(url)
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
	}

	// const [counter, setCounter] = useState(1)
	const [todos, setTodos] = useState([])

	return (
		<TodosContex.Provider value={{todos,setTodos,fetchTodos,addTodo,removeTodo}}>
			{props.children}
		</TodosContex.Provider>
	);
}

export default TodosContexWrapper;
export {TodosContex};