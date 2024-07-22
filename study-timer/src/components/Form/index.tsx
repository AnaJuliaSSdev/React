import { IFormProps } from "../../interfaces/IFormProps";
import { IFormState } from "../../interfaces/IFormState";
import CustomButton from "../Button";
import style from "./Form.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ setTasks }: IFormProps) {
	const [state, setState] = useState<IFormState>({ task: "", time: "00:00:00" });

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTasks((prevTasks) => [
			...prevTasks,
			{ ...state, selected: false, completed: false, id: uuidv4() },
		]);
		setState({ task: "", time: "00:00" });
	};
	return (
		<form className={style.newTask} onSubmit={handleSubmit}>
			<div className={style.inputContainer}>
				<label htmlFor="task">Add a new study</label>
				<input
					type="text"
					name="task"
					id="task"
					placeholder="What do you want to study today?"
					value={state.task}
					onChange={handleChange}
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="time">Time</label>
				<input
					type="time"
					step="1"
					name="time"
					id="time"
					value={state.time}
					onChange={handleChange}
					min="00:00:00"
					max="23:59:59"
					required
				/>
			</div>
			<CustomButton type="submit" buttonText="Add" />
		</form>
	);
}
