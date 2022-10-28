import React from 'react';
import { CommentIcon } from '../icons';
import { ComplainIcon } from '../icons';
import { HideIcon } from '../icons';
import { SaveIcon } from '../icons';
import { ShareIcon } from '../icons';
import { IconAnon } from '../icons';
// import comment from '../icons/comment.svg';



export function Icon(props: any) {
   switch (props.name) {
      case 'Comment':
         return <CommentIcon {...props} />;
      case 'Complain':
         return <ComplainIcon {...props} />;
      case 'Hide':
         return <HideIcon {...props} />;
      case 'Save':
         return <SaveIcon {...props} />;
      case 'Share':
         return <ShareIcon {...props} />;
      case 'Anon':
         return <IconAnon {...props} />;
      default:
         return <div />
   }
}