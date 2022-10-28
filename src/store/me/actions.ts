import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../storeRedux";

// ME_REQUEST
export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
	type: typeof ME_REQUEST;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
	type: ME_REQUEST,
});

// ME_REQUEST_SUCCESS
export interface IUserData {
	name?: string;
	iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccesAction = {
	type: typeof ME_REQUEST_SUCCESS;
	data: IUserData;

}

export const MeRequestSucces: ActionCreator<MeRequestSuccesAction> = (data: IUserData) => ({
	type: ME_REQUEST_SUCCESS,
	data,
});

// ME_REQUEST_ERROR
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
	type: typeof ME_REQUEST_ERROR;
	error: string;
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
	type: ME_REQUEST_ERROR,
	error,
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
	dispatch(meRequest());
	axios.get('https://oauth.reddit.com/api/v1/me', {
		headers: { Authorization: `bearer ${getState().token}` }
	}).then((response) => {
		const userData = response.data;
		const myUserData = { name: userData.name, iconImg: userData.snoovatar_img };
		dispatch(MeRequestSucces(myUserData))
	})
		.catch((error) => {
			console.log(error);
			dispatch(meRequestError(String(error)));
		});
}




