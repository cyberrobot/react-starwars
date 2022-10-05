import { SimpleGrid, Stack } from '@mantine/core';

import { Planet } from 'api';
import { useStyles } from '../styles';

type Props = {
  data: Planet | null;
};

export function Planet({ data }: Props) {
  const { classes } = useStyles();
  return (
    <SimpleGrid cols={2} className={classes.container}>
      <Stack className={classes.descriptionTermList}>
        <div>Climate</div>
        <div>Diameter</div>
        <div>Gravity</div>
        <div>Terrain</div>
        <div>Population</div>
      </Stack>
      <Stack className={classes.descriptionDetailsList}>
        <div>{data?.climate}</div>
        <div>
          {data?.diameter +
            ' Kilometers ' +
            `(${(Number(data?.diameter) / 1.6).toFixed(0)} Miles)`}
        </div>
        <div>{data?.gravity}</div>
        <div>{data?.terrain}</div>
        <div>{data?.population}</div>
      </Stack>
    </SimpleGrid>
  );
}
