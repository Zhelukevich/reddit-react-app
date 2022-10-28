import React from 'react'
import classNames from 'classnames';
import styles from './visible.css'


export enum EScreens {
   decktop = 'decktop',
   mobile = 'mobile',
   tablet = 'tablet',

}

interface VisibleProps {
   As?: 'li' | 'ul' | 'button' | 'div' | 'p' | 'span';
   children?: React.ReactNode;
   screen: EScreens;
}

export function Visible(props: VisibleProps) {

   const {
      As = 'li',
      screen = EScreens.decktop,
      children
   } = props

   const classes = classNames(
      styles[screen]
   );

   return (
      <As className={classes}>
         {children}
      </As>
   );
}