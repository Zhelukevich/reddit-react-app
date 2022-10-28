import { Action, ActionCreator, Reducer } from "redux";
import { RootStateOrAny } from 'react-redux';
import { ThunkAction } from "redux-thunk";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccesAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReduser, MeState } from "./me/reduser";

export type RootState = {
	commentText: string;
	token: string;
	me: MeState;
}

const initialState: RootState = {
	commentText: '',
	token: '',
	me: {
		loading: false,
		error: '',
		data: {},
	},
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdataCommentAction = {
	type: typeof UPDATE_COMMENT,
	text: string
}

export const updateComment: ActionCreator<UpdataCommentAction> = (text: string) => ({
	type: UPDATE_COMMENT,
	text,
});

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
	type: typeof SET_TOKEN,
	token: string
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
	type: SET_TOKEN,
	token,
});



export const saveToken = (): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => (dispatch) => {
	if (window.__token__) {
		dispatch(setToken(window.__token__))
	}
}

type MyAction = UpdataCommentAction
	| SetTokenAction
	| MeRequestAction
	| MeRequestSuccesAction
	| MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				commentText: action.text,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.token,
			};
		case ME_REQUEST:
		case ME_REQUEST_SUCCESS:
		case ME_REQUEST_ERROR:
			return {
				...state,
				me: meReduser(state.me, action),
			}
		default:
			return state;
	}

}
