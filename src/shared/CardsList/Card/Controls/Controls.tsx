import React from 'react';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControls {
	score: string
}

export function Controls({ score }: IControls) {
	return (
		<div className={styles.controls}>
			<KarmaCounter score={score} />
			<CommentsButton />
			<div className={styles.actions}>
				<ShareButton />
				<SaveButton />
			</div>
		</div>
	);
}
