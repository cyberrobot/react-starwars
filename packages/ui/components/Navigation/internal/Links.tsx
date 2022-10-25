import { Entity } from 'api';
import React from 'react';
import { useStyles } from '../styles';

type LinksProps = {
  data: Entity[] | undefined;
  resourceDetails: Entity | null;
  onClick: (resource: Entity) => void;
};

export default function Links({ data, resourceDetails, onClick }: LinksProps) {
  const { classes, cx } = useStyles();
  return (
    <>
      {data?.map((item: Entity, index: number) => {
        const name = 'name' in item ? item.name : item.title;
        return (
          <a
            className={cx(classes.link, {
              [classes.linkActive]:
                name === resourceDetails?.name ||
                name === resourceDetails?.title,
            })}
            href=""
            key={name}
            onClick={(event) => {
              event.preventDefault();
              if (typeof onClick === 'function') {
                onClick(item);
              }
            }}
          >
            <span>{name}</span>
          </a>
        );
      })}
    </>
  );
}
