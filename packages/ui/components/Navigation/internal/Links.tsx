import { Link, Navigate, useNavigate } from '@tanstack/react-location';
import { Entity } from 'api';
import React from 'react';
import { useResourceStore } from 'store';
import { useStyles } from '../styles';

type LinksProps = {
  data: Entity[] | undefined;
};

export default function Links({ data }: LinksProps) {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const { currentResourceDetails, setCurrentResourceDetails } =
    useResourceStore((state) => state);
  return (
    <>
      {data?.map((item: Entity, index: number) => {
        const name = 'name' in item ? item.name : item.title;
        return (
          <a
            className={cx(classes.link, {
              [classes.linkActive]:
                name === currentResourceDetails?.name ||
                name === currentResourceDetails?.title,
            })}
            href=""
            key={name}
            onClick={(event) => {
              event.preventDefault();
              setCurrentResourceDetails(item);
              navigate({ to: `./${index + 1}` });
            }}
          >
            <span>{name}</span>
          </a>
        );
      })}
    </>
  );
}
