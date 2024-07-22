import { IItemProps } from "../../../interfaces/IItemProps";
import style from "../List.module.scss";

export default function Item({
	task,
	time,
	selected,
	completed,
	id,
	selectTask,
}: Readonly<IItemProps>) {
	return (
		<li
			onClick={() =>
				!completed &&
				selectTask({
					task,
					time,
					id,
					completed,
					selected,
				})
			}
			className={`${style.item} ${selected ? style.selectedItem : ""} ${
				completed ? style.completedItem : ""
			}`}
		>
			<h3>{task}</h3>
			<span>{time}</span>
			{completed && <span className={style.completed} aria-label="completed task" />}
		</li>
	);
}
