import React from "react";

function RenderingArray(props) {
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

	return  <div>

				<ul>
					{ todos.map(todo=><li key={todo.id}>{todo.id}.{todo.title}</li>) }
					{/* <li key="1">1</li>
					<li key="2">2</li> */}
				</ul>

			</div>

}

export {RenderingArray}