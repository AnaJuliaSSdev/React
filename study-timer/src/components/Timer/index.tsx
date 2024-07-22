import { useEffect, useState } from "react";
import CustomButton from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeStringToSeconds } from "../../utils/TimeStringToSeconds";
import { ITimerProps } from "../../interfaces/ITimerProps";

export function Timer({ selectedTask, finishTask }: ITimerProps) {
	const [timeInSeconds, setTimeInSeconds] = useState<number>(0);

	useEffect(() => {
		if (selectedTask?.time) setTimeInSeconds(timeStringToSeconds(selectedTask.time));
	}, [selectedTask]);

	function regressive(counter: number = 0) {
		setTimeout(() => {
			if (counter > 0) {
				setTimeInSeconds(counter - 1);
				return regressive(counter - 1);
			}
			finishTask();
		}, 1000);
	}

	return (
		<div className={style.timer}>
			<p className={style.title}>Choose a card and start a timer.</p>
			<div className={style.timerWrapper}>
				<Clock timeInSeconds={timeInSeconds} />
			</div>
			<CustomButton onClick={() => regressive(timeInSeconds)} buttonText={"Start"} />
		</div>
	);
}
