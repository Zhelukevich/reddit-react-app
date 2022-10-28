import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentForm.css'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";



// Библиотека react-hook-form //////////////////////////////////////////////////////////////////////
export function CommentForm() {
	const {
		register,
		watch,
		formState:
		{ errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur'
	});

	console.log(watch('Comment'));


	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data),
			alert('Форма отправлена!'),
			reset()

	};

	return (
		<form className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<textarea className={styles.input}
				{...register('Comment', {
					minLength: {
						value: 3,
						message: 'Введите больше 3-х символов'
					}
				})}
			/>
			<div className={styles.error}>
				{errors?.Comment && <p>{errors?.Comment?.message || "Введите больше 3-х символов"}</p>}
			</div>
			<button type="submit" className={styles.button} >Комментировать</button>
		</form>
	)
}


// REDUX //////////////////////////////////////////////////////////////////////

// type Props = {
// 	onSubmit: (event: FormEvent) => void;
// 	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// 	value: string;
// }

// export function CommentForm({ onChange, onSubmit, value }: Props) {

// 	return (
// 		<form className={styles.form} onSubmit={onSubmit}>
// 			<textarea className={styles.input} value={value} onChange={onChange} />
// 			<button type="submit" className={styles.button}>Комментировать</button>
// 		</form>
// 	)
// }

// упровляемы компонет формы //////////////////////////////////////////////////////////
// export function CommentForm() {
// 	const [value, setValue] = useState('');
// 	const [touched, setTouched] = useState(false);
// 	const [valueError, setValueError] = useState('');

// 	function handleSubmit(event: FormEvent) {
// 		event.preventDefault();
// 		setTouched(true);
// 		setValueError(validateValue());

// 		const isFormValid = !validateValue();
// 		if (!isFormValid) return;

// 		alert('Форма отправлена!');
// 	}

// 	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
// 		setValue(event.target.value);
// 	}


// 	function validateValue() {
// 		if (value.length <= 5) return 'Введите больше 5-х символов';
// 		return ''
// 	}



// 	return (
// 		<form className={styles.form} onSubmit={handleSubmit}>
// 			<textarea
// 				className={styles.input}
// 				value={value}
// 				onChange={handleChange}
// 				aria-invalid={valueError ? 'true' : undefined}
// 			/>
// 			{touched && valueError && <div >{valueError}</div>}
// 			<button
// 				type="submit"
// 				className={styles.button}
// 			>
// 				Комментировать
// 			</button>
// 		</form>
// 	)
// }


