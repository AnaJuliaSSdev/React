export interface ICustomButtonProps {
    buttonText: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void;
}