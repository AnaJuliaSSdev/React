import { ITask } from "./ITask";

export interface IFormProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}