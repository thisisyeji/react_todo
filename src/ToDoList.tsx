import React, { useState } from 'react';
import styled from 'styled-components';

function ToDoList() {
	const [Todo, setTodo] = useState('');
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setTodo(value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(Todo);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={Todo} placeholder='Write a to do' />
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
