import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react'
import styles from './reply.css'

type ReplyProps = {
	onClose: (event: any) => void;
}

export function Reply({ onClose }: ReplyProps) {

	const ref = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		console.log(ref.current?.focus());
	}, [])

	////////////////////////////////////////////////////////////////  неупровляемый элемент

	// function handleSumbit(event: FormEvent) {
	// 	event.preventDefault();
	// 	console.log(ref.current?.value);
	// }

	// ////////////////////////////////////////////////////////////////  упровляемый элемент

	const [value, setValue] = useState('');

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event.target.value)
	}

	function handleSumbit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<form className={styles.form} onSubmit={handleSumbit}>
			<textarea
				id='txtInput'
				className={styles.input}
				onChange={handleChange}
				ref={ref}
				placeholder="@Владимир Петров"
			/>
			<div className={styles.blockBtn}>
				<button
					type="submit"
					className={styles.button}
					onClick={onClose}
				>
					Отмена
				</button>
				<button type="submit" className={styles.button}>Ответить</button>
			</div>
		</form >
	)
}

