import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { Timer } from "../components/Timer";
import style from "./App.module.scss";
import { ITask } from "../interfaces/ITask";

export default function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [selectedTask, setSelectedTask] = useState<ITask>();

	function selectTask(selectedTask: ITask) {
		setSelectedTask(selectedTask);
		setTasks((prevTasks) =>
			prevTasks.map((task) => ({
				...task,
				selected: task.id === selectedTask.id,
			}))
		);
	}

	function finishTask() {
		if (selectedTask) {
			setSelectedTask(undefined);
			setTasks((prevTasks) =>
				prevTasks.map((task) => {
					if (task.id === selectedTask.id) {
						return {
							...task,
							selected: false,
							completed: true,
						};
					}
					return task;
				})
			);
		}
	}

	return (
		<div className={style.AppStyle}>
			<Form setTasks={setTasks} />
			<List tasks={tasks} selectTask={selectTask} />
			<Timer finishTask={finishTask} selectedTask={selectedTask} />
		</div>
	);
}
