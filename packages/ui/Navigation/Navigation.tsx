import { useEffect, useRef, useState } from 'react';
import { Button, Loader, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource, Entity } from 'api';
import { useStyles } from './styles';

export function Navigation() {
  const { classes, cx } = useStyles();
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [compoundData, setCompoundData] = useState<Entity[]>([]);
  const currentResource = useResourceStore((state) => state.currentResource);
  const { isLoading, isSuccess, data } = useQuery(
    ['resource', currentResource, pageIndex],
    async () =>
      await getResource({ resource: `${currentResource}?page=${pageIndex}` }),
  );
  const { currentResourceDetails, setCurrentResourceDetails } =
    useResourceStore((state) => state);

  useEffect(() => {
    setCurrentResourceDetails(null);
  }, [setCurrentResourceDetails, currentResource]);

  useEffect(() => {
    if (data) {
      setCompoundData((prev) => [...prev, ...data?.results]);
    }
  }, [data, setCompoundData, pageIndex, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      scrollAnchorRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [compoundData.length, isSuccess]);

  const links = compoundData.map((item: Entity, index: number) => {
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
        }}
      >
        <span>{name}</span>
      </a>
    );
  });

  const loadMoreHandler = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <Navbar className={classes.container}>
      <Navbar.Section className={classes.listContainer}>
        {links}
        <div ref={scrollAnchorRef}></div>
      </Navbar.Section>
      <Navbar.Section className={classes.navbarFooter}>
        <Button
          onClick={loadMoreHandler}
          loading={isLoading}
          disabled={data?.next === null}
        >
          Load more
        </Button>
      </Navbar.Section>
    </Navbar>
  );
}
