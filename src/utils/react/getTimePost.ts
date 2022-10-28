export function getTimePost(date: string): string {
	const today = new Date();
	const createAt = new Date(Number(date) * 1000);
	const daysLag = Math.ceil(
		Math.abs(today.getTime() - createAt.getTime()) / (1000 * 3600)
	);
	let time = '';
	switch (true) {
		case (daysLag > 1 && daysLag < 5) || (daysLag > 21 && daysLag < 25):
			time = `${daysLag} часа назад`;
			break;
		case daysLag > 4 && daysLag < 21:
			time = `${daysLag} часов назад`;
			break;
		case daysLag === 1 || daysLag === 21:
			time = `${daysLag} час назад`;
			break;
		default:
			time = 'менее часа назад';
	}
	return daysLag < 24 ? `${time}` : `${createAt}`;
}
