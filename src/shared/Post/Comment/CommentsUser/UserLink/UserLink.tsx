import React from 'react';
import styles from './Commentslink.css';

export function UserLink() {
	return (
		<div className={styles.userLink}>
			<img className={styles.avatar}
				src="https://avatars.mds.yandex.net/i?id=dd07e23f2462439717d2e625288661a0_l-5322694-images-thumbs&n=13" alt="avatar" />
			<a href="#user-url" className={styles.username}>Владимир Петров</a>
		</div>
	);
}
