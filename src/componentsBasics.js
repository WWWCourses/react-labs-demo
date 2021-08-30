import React from 'react';


/* --------------------------- Function Component --------------------------- */
// Creates and Returns React Element:
function FunctionComponent(props) {
  // with pure JS syntax:
  // return React.createElement( "div" , {className: "App"} ,"FunctionComponent");

  // with JSX Syntax
	return <div className="App">FunctionComponent</div>;
}
// const FunctionComponent = (props)=>React.createElement( "div" , {className: "App"} ,"FunctionComponent");


/* ----------------------------- Class Component ---------------------------- */
class ClassComponent extends React.Component{
  render(){
    return React.createElement( "div" , {className: "App"} ,"ClassComponent")
  }
}


export {FunctionComponent, ClassComponent};