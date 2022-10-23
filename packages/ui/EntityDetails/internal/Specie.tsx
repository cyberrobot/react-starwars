import { SimpleGrid, Stack } from '@mantine/core';

import { Specie } from 'api';
import { useStyles } from '../styles';

type Props = {
  data: Specie | null;
};

export function Specie({ data }: Props) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={2}
      className={classes.content}
    >
      <Stack className={classes.descriptionTermList}>
        <div>Name</div>
        <div>Average height</div>
        <div>Average lifespan</div>
        <div>Classification</div>
        <div>Designation</div>
        <div>Eye colors</div>
        <div>Hair colors</div>
        <div>Skin colors</div>
        <div>Language</div>
      </Stack>
      <Stack className={classes.descriptionDetailsList}>
        <div>{data?.name}</div>
        <div>{data?.average_height}</div>
        <div>{data?.average_lifespan}</div>
        <div>{data?.classification}</div>
        <div>{data?.designation}</div>
        <div>{data?.eye_colors}</div>
        <div>{data?.hair_colors}</div>
        <div>{data?.skin_colors}</div>
        <div>{data?.language}</div>
      </Stack>
    </SimpleGrid>
  );
}
