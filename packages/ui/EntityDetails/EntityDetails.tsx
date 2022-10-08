import { useResourceStore } from 'store';
import { Film } from './internal/Film';
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
      {currentResource === 'films' && currentResourceDetails && (
        <Film data={currentResourceDetails} />
      )}
    </>
  );
}
