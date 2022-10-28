import React, { ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../../store/storeRedux';

import { CommentForm } from './CommentForm/CommentForm';



export function CommentFormContainer() {
	const value = useSelector<RootState, string>(state => state.commentText);
	const dispatch = useDispatch();

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		dispatch(updateComment(event.target.value))
	}

	function handleSumbit(event: FormEvent) {
		event.preventDefault();
		console.log(value);
	}


	return (
		<CommentForm
		// value={value}
		// onSubmit={handleSumbit}
		// onChange={handleChange}
		/>
	);
}
