import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];

}

const noop = () => { };

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'li', text, onClick = noop, className, id, href }) => (
        <As className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >{text}</As>
      ))}
    </>
  );
}


/*
import React from 'react';

interface IItem {
  value: string;
  id: string;
}

interface IMyListProps {
  list: IItem[];
  onClick: (id: string) => void;
}

export function MyList({ list, onClick }: IMyListProps) {
  return (
    <ul>
      {list.map((item) => (
        <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
      )}
    </ul>

  );
}
*/
