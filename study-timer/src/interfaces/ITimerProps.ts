import { ITask } from "./ITask";

export interface ITimerProps {
	selectedTask: ITask | undefined, 
	finishTask: () => void;
}