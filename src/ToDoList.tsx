import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

interface IForm {
	email: string;
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
	password1: string;
}

function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		defaultValues: {
			email: '@naver.com',
		},
	});

	const onValid = (data: any) => {
		console.log(data);
	};
	// console.log(formState?.errors);

	return (
		<div>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit(onValid)}>
				<input
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
							message: 'Only naver.com emails allowed.',
						},
					})}
					placeholder='Email'
				/>
				<span>{errors?.email?.message}</span>

				<input
					{...register('firstName', { required: 'write here' })}
					placeholder='First Name'
				/>
				<span>{errors?.firstName?.message}</span>

				<input
					{...register('lastName', { required: 'write here' })}
					placeholder='Last Name'
				/>
				<span>{errors?.lastName?.message}</span>

				<input
					{...register('userName', { required: 'write here', minLength: 10 })}
					placeholder='User Name'
				/>
				<span>{errors?.userName?.message}</span>

				<input
					{...register('password', { required: 'write here', minLength: 5 })}
					placeholder='Password'
				/>
				<span>{errors?.password?.message}</span>

				<input
					{...register('password1', {
						required: 'Password is required',
						minLength: {
							value: 5,
							message: 'Your password is too short',
						},
					})}
					placeholder='Password1'
				/>
				<span>{errors?.password1?.message}</span>

				<button>Add</button>
			</form>
		</div>
	);
}

/*
function ToDoList() {
	const [Todo, setTodo] = useState('');
	const [TodoError, setTodoError] = useState("");
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setTodoError("");
		setTodo(value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	if(Todo.length < 10) {
	return setTodoError("To do should be longer.");
	}
	console.log("submit");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={Todo} placeholder='Write a to do' />
				<button>Add</button>
				{TodoError !== "" ? TodoError : null}
			</form>
		</div>
	);
}
*/

export default ToDoList;
