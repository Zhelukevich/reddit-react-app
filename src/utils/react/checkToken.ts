export const checkToken = (token: string): boolean =>
	Boolean(token) && token.length > 0 && token !== 'undefined';
