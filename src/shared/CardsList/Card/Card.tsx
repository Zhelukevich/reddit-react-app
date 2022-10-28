import React from 'react';
import { IPostData } from '../../../hooks/usePostsData';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';



export function Card(post: IPostData) {
	return (
		<li className={styles.card}>
			<TextContent title={post.title} id={post.id} author={post.author} />
			<Preview />
			<Menu />
			<Controls score={post.score} />
		</li>
	);
}
