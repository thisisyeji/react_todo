import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

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

	return (
		<li>
			{text}
			{category !== 'DOING' && (
				<button name='DOING' onClick={onClick}>
					Doing
				</button>
			)}
			{category !== 'TO_DO' && (
				<button name='TO_DO' onClick={onClick}>
					To Do
				</button>
			)}
			{category !== 'DONE' && (
				<button name='DONE' onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
