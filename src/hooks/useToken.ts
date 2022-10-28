import { useState, useEffect } from "react"

export function useToken() {
	const [token, setToken] = useState('');

	useEffect(() => {
		// if(window.__token__) {
		//   setToken(window.__token__)
		// }
		if (localStorage.token) {
			setToken(localStorage.token)
		}
	}, [])
	return [token]
}


