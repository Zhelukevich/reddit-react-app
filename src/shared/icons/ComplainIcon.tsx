import * as React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

interface IconProps {
   width?: number;
   height?: number;
   // colorHover: string;
}

export function ComplainIcon(props: IconProps) {
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
         width={width} height={height} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" fill="#999999" />
      </svg>
   )
}