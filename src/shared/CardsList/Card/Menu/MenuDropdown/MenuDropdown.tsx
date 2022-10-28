import React from 'react';
import styles from './menudropdown.css';
import { EColor, Text } from '../../../../Text';
import { MenuItemsList } from './MenuItemsList';
import ReactDOM from 'react-dom';


export function MenuDropdown() {

	// const node = document.querySelector('#dropdown_root');
	// if (!node) return null;


	return (
		<div className={styles.dropdown}>
			<MenuItemsList postId={'1234'} />
			<button className={styles.closeButton}>
				<Text mobileSize={12} size={14} color={EColor.grey66} > Закрыть</Text>
			</button>
		</div>

	);
}
