import { useEffect, useRef, useState } from 'react';
import { Button, Loader, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource, Entity } from 'api';
import { useStyles } from './styles';
import { SearchField } from '../SearchField/SearchField';
import Links from './internal/Links';

export function Navigation() {
  const { classes } = useStyles();
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
    setCompoundData([]);
    setPageIndex(1);
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

  const loadMoreHandler = () => {
    setPageIndex(pageIndex + 1);
  };

  const searchHandler = (data: Entity[] | undefined) => {
    if (data) {
      setCompoundData(data);
    }
  };

  return (
    <Navbar className={classes.container}>
      <Navbar.Section className={classes.searchContainer}>
        <SearchField
          placeholder={`Search ${currentResource}...`}
          onSearch={searchHandler}
        />
      </Navbar.Section>
      <Navbar.Section className={classes.listContainer}>
        <Links
          data={compoundData}
          resourceDetails={currentResourceDetails}
          onClick={setCurrentResourceDetails}
        />
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
