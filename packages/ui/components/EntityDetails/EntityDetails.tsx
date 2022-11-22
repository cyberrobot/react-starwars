import { useMatch } from '@tanstack/react-location';
import { useResourceStore } from 'store';
import { Film } from './internal/Film';
import { People } from './internal/People';
import { Planet } from './internal/Planet';
import { Specie } from './internal/Specie';
import { Starship } from './internal/Starship';
import { Vehicle } from './internal/Vehicle';
import { useStyles } from './styles';

type EntityDetailsProps = {};

export function EntityDetails({}: EntityDetailsProps) {
  const { classes } = useStyles();
  const { currentResourceDetails } = useResourceStore((state) => state);
  const {
    params: { resource: currentResource },
  } = useMatch();

  return (
    <div className={classes.page}>
      {currentResource === 'people' && currentResourceDetails && (
        <People data={currentResourceDetails} />
      )}
      {currentResource === 'planets' && currentResourceDetails && (
        <Planet data={currentResourceDetails} />
      )}
      {currentResource === 'films' && currentResourceDetails && (
        <Film data={currentResourceDetails} />
      )}
      {currentResource === 'species' && currentResourceDetails && (
        <Specie data={currentResourceDetails} />
      )}
      {currentResource === 'vehicles' && currentResourceDetails && (
        <Vehicle data={currentResourceDetails} />
      )}
      {currentResource === 'starships' && currentResourceDetails && (
        <Starship data={currentResourceDetails} />
      )}
    </div>
  );
}
