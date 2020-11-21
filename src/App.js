import React from 'react';

export default function App(props) {
	return (
		<div>
			<h2>Name: {props.name}</h2>			
			<h3>Address: {props.address}</h3>
		</div>
	);
}
