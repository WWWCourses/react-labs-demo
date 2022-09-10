import { FuncComp } from "./components/funcComp";
import ClassComp from "./components/classComp";
import { JSXDemo } from "./components/JSXDemo";
import { RenderingArray } from "./components/renderingArray";
import { GetUserName } from "./components/propsDemo";
import { TodoList } from "./components/todoList";
// import CountDown from "./components/countDown";
// import StateAndEventsDemo from "./components/stateAndEventsDemo";
import GetInput from "./components/getInputValueDemo";
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

function getUserName() {
	return "Ada"
}

// simplest React Component - a function which returns react element
function App(props) {
	// return <CountDown/>
	// return <StateAndEventsDemo/>
	return <GetInput/>
}

export default App;
