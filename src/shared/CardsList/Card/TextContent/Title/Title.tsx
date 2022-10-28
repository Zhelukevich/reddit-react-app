import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from '../../../../Post/Post';
import styles from './title.css';

interface ITitleProps {
	title: string;
	id: string;
}

export function Title({ title, id }: ITitleProps) {

	return (
		<h2 className={styles.title}>
			<Link to={`/posts/${id}`} className={styles.postLink}>
				{title}
			</Link>
		</h2>

	);
}
