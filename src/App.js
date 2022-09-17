// import { FuncComp } from "./components/funcComp";
// import ClassComp from "./components/classComp";
// import { JSXDemo } from "./components/JSXDemo";
// import { RenderingArray } from "./components/renderingArray";
// import { GetUserName } from "./components/propsDemo";
// import { TodoList } from "./components/todoList_old";
// import CountDown from "./components/countDown";
// import StateAndEventsDemo from "./components/stateAndEventsDemo";
// import GetInput from "./components/getInputValueDemo";
// import LifeCycleMethods from "./components/lifecycleMethods";
import TodoApp from "./components/todoApp";

import "./main.css";

// simplest React Component - a function which returns react element
function App(props) {
	// return <CountDown/>
	// return <StateAndEventsDemo/>
	// const el = <GetInput/>
	// console.dir(el);
	// return el

	// return <LifeCycleMethods/>
	return <TodoApp/>
}

export default App;
