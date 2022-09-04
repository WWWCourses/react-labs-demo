import React from 'react';
import { FuncComp } from "./components/funcComp";
import ClassComp from "./components/classComp";
import { JSXDemo } from "./components/JSXDemo";
import { RenderingArray } from "./components/renderingArray";
import { GetUserName } from "./components/propsDemo";
import { TodoList } from "./components/todoList";
import "./main.css";

function getTodoData(){
	const todos = [
		{
			id:1,
			title:'Todo1',
			completed:false
		},
		{
			id:2,
			title:'Todo2',
			completed:true
		}
	];

	return todos;

}


// simplest React Component - a function which returns react element
function App(props) {
	// return <div>
	// 	<h1>Heading 1</h1>
	// 	<FuncComp userName="Ada" id="fc" />
	// 	{FuncComp({"userName":"Ada"})}
	// 	<hr/>
	// 	<ClassComp userName="Ada" id="cp"/>
	// 	{(new ClassComp({"userName":"Ada"})).render()}
	// </div>
	// return <JSXDemo/>
	return <TodoList todos={getTodoData()}/>
}

export default App;
