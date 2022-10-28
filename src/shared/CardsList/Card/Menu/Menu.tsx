import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../icons';
import styles from './menu.css';
import { MenuDropdown } from './MenuDropdown';

export function Menu() {
	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}>
						<MenuIcon />
					</button>
				}
			>
				<MenuDropdown />
			</Dropdown>
		</div>
	);
}


