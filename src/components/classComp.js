import React from "react";


class ClassComp extends React.Component{
	render(){
		console.log(`props in ClassComp:`);
		console.dir(this.props);
		return <div>Class Component</div>
	}
}


export default ClassComp