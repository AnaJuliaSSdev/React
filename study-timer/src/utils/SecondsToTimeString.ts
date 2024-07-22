export const secondsToTimeString = (seconds: number): string => {
	const hours = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((seconds % 3600) / 60)
		.toString()
		.padStart(2, "0");
	const secs = (seconds % 60).toString().padStart(2, "0");
	return `${hours}:${minutes}:${secs}`;
};
