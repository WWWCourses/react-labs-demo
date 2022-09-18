import React, {useContext} from 'react';
import { Sibling1, Sibling2 } from "./siblings";
import CounterContextWrapper, {Counter} from "./counterContext";

function Parent() {

	return (
		<CounterContextWrapper>
			<Sibling1 />
			<Sibling2 />
		</CounterContextWrapper>
	);
}

export default Parent;