import { SimpleGrid, Stack } from '@mantine/core';

import { Starship } from 'api';
import { useStyles } from '../styles';

type Props = {
  data: Starship | null;
};

export function Starship({ data }: Props) {
  const { classes } = useStyles();
  return (
    <SimpleGrid cols={2} className={classes.container}>
      <Stack className={classes.descriptionTermList}>
        <div>Name</div>
        <div>Model</div>
        <div>Manufacturer</div>
        <div>Cargo capacity</div>
        <div>Consumables</div>
        <div>Cost in credits</div>
        <div>Crew</div>
        <div>Length</div>
        <div>Max atmosphering speed</div>
        <div>MGLT</div>
        <div>Hyperdrive rating</div>
        <div>Passengers</div>
        <div>Starship class</div>
      </Stack>
      <Stack className={classes.descriptionDetailsList}>
        <div>{data?.name}</div>
        <div>{data?.model}</div>
        <div>{data?.manufacturer}</div>
        <div>{data?.cargo_capacity}</div>
        <div>{data?.consumables}</div>
        <div>{data?.cost_in_credits}</div>
        <div>{data?.crew}</div>
        <div className={classes.number}>{`${data?.length} meters`}</div>
        <div>{data?.max_atmosphering_speed}</div>
        <div className={classes.number}>{`${data?.MGLT} MGLT/h`}</div>
        <div>{data?.hyperdrive_rating}</div>
        <div>{data?.passengers}</div>
        <div>{data?.starship_class}</div>
      </Stack>
    </SimpleGrid>
  );
}
