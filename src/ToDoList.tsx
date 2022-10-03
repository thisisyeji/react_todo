import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import {
	atom,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';

const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

interface Iform {
	toDo: string;
}

interface IToDo {
	text: string;
	id: number;
	category: 'TO_DO' | 'DOING' | 'DONE';
}

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	// value만 받고 싶을때 const value = useRecoilValue(toDoState);
	// value를 수정하고 싶을때 const modFn = useSetRecoilState(toDoState);

	const { register, handleSubmit, setValue } = useForm<Iform>();
	const handleValid = ({ toDo }: Iform) => {
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category: 'TO_DO' },
			...oldToDos,
		]);
		setValue('toDo', '');
	};

	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register('toDo', {
						required: 'Please write a to do.',
					})}
					placeholder='Write a to do'
				/>
				<button>Add</button>
			</form>

			<ul>
				{toDos.map((toDo) => (
					<li key={toDo.id}>{toDo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
