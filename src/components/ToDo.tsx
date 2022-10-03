import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			// target 경로 찾기 -> index번째 oldToDo를 newToDo로 바꿔주기
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			// const oldToDo = oldToDos[targetIndex];
			const newToDo = { text, id, category: name as any };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};

	const deleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			return [
				...oldToDos.slice(0, targetIndex),
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};

	return (
		<li>
			<span>{text}</span>
			{category !== Categories.DOING && (
				<button name={Categories.DOING} onClick={onClick}>
					Doing
				</button>
			)}
			{category !== Categories.TO_DO && (
				<button name={Categories.TO_DO} onClick={onClick}>
					To Do
				</button>
			)}
			{category !== Categories.DONE && (
				<button name={Categories.DONE} onClick={onClick}>
					Done
				</button>
			)}

			<button onClick={deleteBtn}>Delete</button>
		</li>
	);
}

export default ToDo;
