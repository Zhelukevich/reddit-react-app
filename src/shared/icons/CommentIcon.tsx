import * as React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

interface IconProps {
	width: number;
	height: number;
	// colorHover: string;
}

export function CommentIcon(props: IconProps) {
	const {
		width,
		height,
		// colorHover,
	} = props;

	// const classes = classNames(
	//    { [styles[colorHover]]: colorHover }
	// );

	return (
		<svg
			width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z" fill="#999999" />
		</svg>
	)
}
