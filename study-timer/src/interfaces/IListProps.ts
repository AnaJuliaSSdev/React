import { ITask } from "./ITask";

export interface IListProps {
	tasks: ITask[];
	selectTask: (selectedTask: ITask) => void;
}
