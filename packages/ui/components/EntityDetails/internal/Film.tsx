import { SimpleGrid, Stack } from '@mantine/core';

import { Film } from 'api';
import { useStyles } from '../styles';

type Props = {
  data: Film | null;
};

export function Film({ data }: Props) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={2}
      className={classes.content}
    >
      <Stack className={classes.descriptionTermList}>
        <div>Title</div>
        <div>Director</div>
        <div>Producer</div>
        <div>Release date</div>
      </Stack>
      <Stack className={classes.descriptionDetailsList}>
        <div>{data?.title}</div>
        <div>{data?.director}</div>
        <div>{data?.producer}</div>
        <div>{data?.release_date}</div>
      </Stack>
    </SimpleGrid>
  );
}
