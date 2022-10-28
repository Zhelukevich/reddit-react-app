import React from 'react';
import { HideIcon, ComplainIcon, CommentIcon, ShareIcon, SaveIcon } from '../../../../../icons';
import styles from './menuitemslist.css';
import { EColor, Text } from '../../../../../Text';
import { EScreens, Visible } from '../../../../../Visible';
import { Icon } from '../../../../../Icon';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <Visible screen={EScreens.decktop}>
        <button className={styles.btnItem} onClick={() => console.log(postId)}>
          {/* <CommentIcon colorHover='icon' width={16} height={14.17} /> */}
          <Icon name='Comment' width={16} height={14.17} />
          <Text mobileSize={12} size={14} color={EColor.grey99}> Комментарии</Text>
        </button>
      </Visible>
      <Visible screen={EScreens.decktop}>
        <button className={styles.btnItem} onClick={() => console.log(postId)}>
          {/* <ShareIcon colorHover='icon' width={16} height={14} /> */}
          <Icon name='Share' width={16} height={14} />
          <Text mobileSize={12} size={14} color={EColor.grey99}> Поделиться</Text>
        </button>
      </Visible>
      <li>
        <button className={styles.btnItem} onClick={() => console.log(postId)}>
          {/* <HideIcon colorHover='icon' width={16} height={14} /> */}
          <Icon name='Hide' colorHover='icon' width={16} height={14} />
          <Text mobileSize={12} size={14} color={EColor.grey99}> Скрыть</Text>
        </button>
      </li>
      <Visible screen={EScreens.decktop}>
        <button className={styles.btnItem} onClick={() => console.log(postId)}>
          {/* <SaveIcon colorHover='icon' width={16} height={14} /> */}
          <Icon name='Save' colorHover='icon' width={16} height={14} />
          <Text mobileSize={12} size={14} color={EColor.grey99}> Сохранить</Text>
        </button>
      </Visible>
      <li>
        <button className={styles.btnItem} onClick={() => console.log(postId)}>
          {/* <ComplainIcon colorHover='icon' width={16} height={14} /> */}
          <Icon name='Complain' colorHover='icon' width={16} height={14} />
          <Text mobileSize={12} size={14} color={EColor.grey99}>Пожаловаться</Text>
        </button>
      </li>
    </ul >
  );
}
