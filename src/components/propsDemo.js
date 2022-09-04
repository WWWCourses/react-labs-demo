function GetUserName(props) {
	let userName = 'Ada';
	return <GreetUser userName={userName} userFamily="Byron"/>
}

function GreetUser(props) {
	console.dir(props)
	return <div id="el1" className="red">Hello, {props.userName} {props.userFamily}</div>
}

export {GetUserName}