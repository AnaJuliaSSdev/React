import { ITask } from "./ITask";

export interface IItemProps extends ITask {
	selectTask: (selectedTask: ITask) => void;
}
