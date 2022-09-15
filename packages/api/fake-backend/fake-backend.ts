import people from './people.json';
import planets from './planets.json';
import films from './films.json';

export type FakeAPIFetchProps = {
  url: string;
};

export function fakeAPIFetch(options: FakeAPIFetchProps) {
  if (options.url.includes('people')) {
    return handleFakeRequestForPeople(options.url);
  } else if (options.url.includes('planets')) {
    return handleFakeRequestForPlanets(options.url);
  } else if (options.url.includes('films')) {
    return handleFakeRequestForFilms(options.url);
  }
  return Promise.resolve({});
}

function handleFakeRequestForPeople(url: string) {
  if (url.includes('page')) {
    return handleListRequest({ url, list: people, modifierFn: modifyPerson });
  } else {
    return handleIndividualRequest({
      url,
      list: people,
      modifierFn: modifyPerson,
    });
  }
}

function handleFakeRequestForPlanets(url: string) {
  if (url.includes('page')) {
    return handleListRequest({ url, list: planets, modifierFn: modifyPlanet });
  } else {
    return handleIndividualRequest({
      url,
      list: planets,
      modifierFn: modifyPlanet,
    });
  }
}

function handleFakeRequestForFilms(url: string) {
  if (url.includes('page')) {
    return handleListRequest({ url, list: films });
  } else {
    return handleIndividualRequest({ url, list: films });
  }
}

function getFilmsThatMatchId({ id, key }: { id: string; key: string }) {
  return films.reduce(
    (
      matchingFilms: string[],
      film: { pk: number; fields: { [key: string]: any } }
    ) => {
      const array = film.fields[key];
      if (array && array.includes && array.includes(parseInt(id))) {
        matchingFilms.push(`${film.pk}`);
      }
      return matchingFilms;
    },
    []
  );
}

function getPeopleThatMatchPlanet({ planetId }: { planetId: string }) {
  return people.reduce((acc: string[], person) => {
    if (person.fields.homeworld === parseInt(planetId)) {
      acc.push(`${person.pk}`);
    }
    return acc;
  }, []);
}

function modifyPerson(person: { id: any; homeworld: any }) {
  const films = getFilmsThatMatchId({ id: person.id, key: 'characters' });
  return {
    ...person,
    homeworld: `${person.homeworld}`,
    films,
  };
}

function modifyPlanet(planet: { id: string }) {
  const films = getFilmsThatMatchId({ id: planet.id, key: 'planets' });
  const residents = getPeopleThatMatchPlanet({ planetId: planet.id });
  return {
    ...planet,
    films,
    residents,
  };
}

function getIndividualThing({ id, list }: { id: number; list: any[] }) {
  return list[id - 1]; // right now the lists are ordered so that index === id - 1
}

export type IndividualRequestProps = {
  url: string;
  list: any[];
  modifierFn?: (item: any) => any;
};

function handleIndividualRequest({
  url,
  list,
  modifierFn,
}: IndividualRequestProps) {
  const regex = /[0-9+]/;
  const match = regex.exec(url);
  const id = match && match.length === 1 ? parseInt(match[0]) : 1;
  const thing = getIndividualThing({ id, list });
  const base = { id: `${thing.pk}`, ...thing.fields };
  let response;
  if (modifierFn) {
    response = modifierFn(base);
  } else {
    response = base;
  }
  return fakeNetwork(response);
}

export type ListRequestProps = {
  url: string;
  list: any[];
  modifierFn?: (item: any) => any;
};

function handleListRequest({ url, list, modifierFn }: ListRequestProps) {
  const regex = /[0-9+]/;
  const match = regex.exec(url);
  const pageNum = match && match.length === 1 ? parseInt(match[0]) : 1;
  const pageSize = 10;
  const startingIndex = pageSize * (pageNum - 1);
  const endingIndex = pageSize * pageNum;
  const next = endingIndex < list.length;
  return fakeNetwork({
    results: list
      .slice(pageSize * (pageNum - 1), pageSize * pageNum)
      .map((listItem) => {
        const standardModifications = turnObjectIntoFakeApiResponse(listItem);
        if (modifierFn) {
          return modifierFn(standardModifications);
        } else {
          return standardModifications;
        }
      }),
    next,
  });
}

function turnObjectIntoFakeApiResponse(obj: {
  fields: any[];
  pk: number;
  model: string;
}) {
  return {
    ...obj.fields,
    id: `${obj.pk}`,
    url: `${obj.model.split('.')[1]}/${obj.pk}`,
  };
}

function wrapWithData(response: any) {
  return { results: response };
}

function fakeNetwork(
  response: { results: unknown; next: unknown },
  delay = 100
) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(response);
    }, delay);
  });
}
