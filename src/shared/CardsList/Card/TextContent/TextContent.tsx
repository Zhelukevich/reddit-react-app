import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
	title: string;
	author: string;
	id: string;
}

export function TextContent({ title, author, id }: ITextContentProps) {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<UserLink author={author} />
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано</span>
					4 часа назад</span>
			</div>
			<Title title={title} id={id} />
		</div>
	);
}
