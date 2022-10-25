import { useEffect, useRef, useState } from 'react';
import { Button, Loader, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource, Entity } from 'api';
import { useStyles } from './styles';
import { SearchField } from '../SearchField/SearchField';
import Links from './internal/Links';
import { Resource } from 'api/dist/data/get-resource/get-resource';

// TODO: Fix issue with additional pages
export function Navigation() {
  const { classes } = useStyles();
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [resource, setResource] = useState<Resource<Entity>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const currentResource = useResourceStore((state) => state.currentResource);
  const { isLoading, isSuccess, data } = useQuery(
    ['resource', currentResource, pageIndex],
    async () =>
      await getResource({ resource: `${currentResource}?page=${pageIndex}` }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
  const { currentResourceDetails, setCurrentResourceDetails } =
    useResourceStore((state) => state);

  useEffect(() => {
    setPageIndex(1);
    setResource({
      count: 0,
      next: null,
      previous: null,
      results: [],
    });
    setCurrentResourceDetails(null);
  }, [setCurrentResourceDetails, currentResource]);

  useEffect(() => {
    if (data) {
      setResource((prev) => {
        return {
          ...data,
          results: [...prev?.results, ...data?.results],
        };
      });
    }
  }, [data, pageIndex, setResource]);

  useEffect(() => {
    if (isSuccess) {
      scrollAnchorRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [resource?.results.length, isSuccess]);

  const loadMoreHandler = () => {
    setPageIndex(pageIndex + 1);
  };

  const searchHandler = (data: Resource<Entity> | undefined) => {
    if (data) {
      setResource(data);
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
        {
          <Links
            data={resource?.results}
            resourceDetails={currentResourceDetails}
            onClick={setCurrentResourceDetails}
          />
        }
        <div ref={scrollAnchorRef}></div>
      </Navbar.Section>
      <Navbar.Section className={classes.navbarFooter}>
        {resource?.next !== null && (
          <Button
            onClick={loadMoreHandler}
            loading={isLoading}
          >
            Load more
          </Button>
        )}
      </Navbar.Section>
    </Navbar>
  );
}
