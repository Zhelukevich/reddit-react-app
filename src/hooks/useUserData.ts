import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData, meRequestAsync } from "../store/me/actions";
import { RootState } from "../store/storeRedux";
import { checkToken } from "../utils/react/checkToken";


export function useUserData() {
	const data = useSelector<RootState, IUserData>(state => state.me.data);
	const loading = useSelector<RootState, boolean>(state => state.me.loading);
	const error = useSelector<RootState, string>(state => state.me.error);

	const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (checkToken(token)) {
			if (!token) return;
			dispatch(meRequestAsync());
		}
	}, [token])

	return {
		data,
		loading,
		error
	}
}

