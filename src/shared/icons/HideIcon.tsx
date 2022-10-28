import * as React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

interface IconProps {
   width?: number;
   height?: number;
   // colorHover: string;
}

export function HideIcon(props: IconProps) {
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
         width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z" fill="#999999" />
      </svg>

   )
}