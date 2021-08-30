import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';


// let reactDivElement = React.createElement( "div" , {className: "App"} ,"fffff");
let reactDivElementJSX = <div>JSX demo</div>;
console.dir(reactDivElementJSX);

ReactDOM.render(
  reactDivElementJSX,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
