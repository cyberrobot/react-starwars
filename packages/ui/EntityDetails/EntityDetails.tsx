import { Container, SimpleGrid, Stack } from '@mantine/core';
import { useResourceStore } from 'store';
import { People } from './internal/People';
import { Planet } from './internal/Planet';

type EntityDetailsProps = {};

export function EntityDetails({}: EntityDetailsProps) {
  const { currentResource, currentResourceDetails } = useResourceStore(
    (state) => state
  );

  return (
    <>
      {currentResource === 'people' && currentResourceDetails && (
        <People data={currentResourceDetails} />
      )}
      {currentResource === 'planets' && currentResourceDetails && (
        <Planet data={currentResourceDetails} />
      )}
    </>
  );
}
