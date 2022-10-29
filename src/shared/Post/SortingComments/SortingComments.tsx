import React from 'react';
import styles from './sortingcomments.css'

export function SortingComments() {
	return (
		<div className={styles.sortingComments}>
			<div className={styles.sortingBlock}>
				<span className={styles.sorting}>Сортировать по: </span>
				<button className={styles.sortingBtn}>Лучшие</button>
			</div>
		</div>
	)
}
