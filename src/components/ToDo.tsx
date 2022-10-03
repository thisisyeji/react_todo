import { IToDo } from '../atoms';

function ToDo({ text }: IToDo) {
	return (
		<li>
			{text}
			<button>Doing</button>
			<button>Done</button>
			<button>To Do</button>
		</li>
	);
}

export default ToDo;
