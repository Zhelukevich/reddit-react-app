import React from 'react';
import styles from './preview.css';

export function Preview() {
	return (
		<div className={styles.preview}>
			<img className={styles.previewImg} crossOrigin="anonymous"
				src="https://avatars.mds.yandex.net/i?id=2e3126a00f1d1588b8cb0e251e0c2213-4362541-images-thumbs&n=13&exp=1"
				alt="poster" />
		</div>
	);
}
