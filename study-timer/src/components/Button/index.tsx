import { ICustomButtonProps } from "../../interfaces/ICustomButtonProps";
import style from "./Button.module.scss";

export default function CustomButton({
	buttonText,
	type = "button",
    onClick
}: Readonly<ICustomButtonProps>) {
	return (
		<button onClick={onClick} type={type} className={style.button}>
			{buttonText}
		</button>
	);
}
