import React from 'react'
import styles from './comment.css'

interface ICommentProps {
	children?: React.ReactNode
}

export function Comments({ children }: ICommentProps) {
	return (
		<div className={styles.comment}>
			<div className={styles.arrows}>
				<div>
					<svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10L9.5 0L19 10H0ZM19 20L9.5 30L0 20L19 20Z" fill="#D9D9D9" />
					</svg>
				</div>
				<span></span>
			</div>
			<div className={styles.commentInfo}>
				{children}
			</div>
		</div>
	)
}
