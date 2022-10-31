import React from 'react';
import styles from './userLink.css';

interface IUserLinkProps {
	author: string;
}

export function UserLink({ author }: IUserLinkProps) {
	return (
		<div className={styles.userLink}>
			<img className={styles.avatar} crossOrigin="anonymous"
				src="https://avatars.mds.yandex.net/i?id=dd07e23f2462439717d2e625288661a0_l-5322694-images-thumbs&n=13" alt="avatar" />
			<a href="#user-url" className={styles.username}>{author}</a>
		</div>
	);
}
