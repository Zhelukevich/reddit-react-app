import React from 'react';
import { Break } from '../../../Break';
import { Icon } from '../../../Icon';
import { EColor, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
	avaterSrc?: string
	username?: string
	loading?: boolean
}

export function UserBlock({ avaterSrc, username, loading }: IUserBlockProps) {
	return (
		<a
			href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
			className={styles.userBox}
		>
			<div className={styles.avatarBox}>
				{avaterSrc
					? <img src={avaterSrc} alt="user avatar" className={styles.avatarImage} />
					: <Icon name='Anon' width={50} height={50} />
				}
			</div>

			<div className={styles.username}>
				<Break size={12} />
				{loading ? (
					<Text size={20} color={EColor.grey99}>Загрузка...</Text>
				) : (
					<Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
				)}

			</div>
		</a >
	);
}
