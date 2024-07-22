import { IClockProps } from "../../../interfaces/IClockProps";
import { secondsToTimeString } from "../../../utils/SecondsToTimeString";
import style from "./Clock.module.scss";

export default function Clock({ timeInSeconds }: IClockProps) {
	const timeString = secondsToTimeString(timeInSeconds);

	return (
		<>
			<span className={style.clockNumber}>{timeString[0]}</span>
			<span className={style.clockNumber}>{timeString[1]}</span>
			<span className={style.clockDiv}>:</span>
			<span className={style.clockNumber}>{timeString[3]}</span>
			<span className={style.clockNumber}>{timeString[4]}</span>
			<span className={style.clockDiv}>:</span>
			<span className={style.clockNumber}>{timeString[6]}</span>
			<span className={style.clockNumber}>{timeString[7]}</span>
		</>
	);
}
