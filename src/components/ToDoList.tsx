import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
	// 둘다
	const toDos = useRecoilValue(toDoState);
	// state만 받고 싶을때 const value = useRecoilValue(toDoState);
	// state를 수정하고 싶을때(setter 함수 리턴) const modFn = useSetRecoilState(toDoState);

	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<ul>
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
