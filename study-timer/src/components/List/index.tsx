import Item from "./Item";
import style from "./List.module.scss";
import { IListProps } from "../../interfaces/IListProps";

export default function List({ tasks, selectTask }: IListProps) {
	return (
		<aside className={style.listTasks}>
			<h2>Day Studies</h2>
			<ul>
				{tasks.map((task) => (
					<Item selectTask={selectTask} key={task.id} {...task} />
				))}
			</ul>
		</aside>
	);
}
