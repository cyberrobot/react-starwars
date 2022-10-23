import { SimpleGrid, Stack } from '@mantine/core';

import { People } from 'api';
import { useStyles } from '../styles';

type Props = {
  data: People | null;
};

export function People({ data }: Props) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={2}
      className={classes.content}
    >
      <Stack className={classes.descriptionTermList}>
        <div>Name</div>
        <div>Height</div>
        <div>Mass</div>
        <div>Hair color</div>
        <div>Gender</div>
        <div>Birth year</div>
      </Stack>
      <Stack className={classes.descriptionDetailsList}>
        <div>{data?.name}</div>
        <div>
          {data?.height +
            'cm ' +
            `(${(Number(data?.height) * 0.0328084).toFixed(2)}ft)`}
        </div>
        <div>{data?.mass + 'kg'}</div>
        <div>{data?.hair_color}</div>
        <div>{data?.gender}</div>
        <div>{data?.birth_year}</div>
      </Stack>
    </SimpleGrid>
  );
}
