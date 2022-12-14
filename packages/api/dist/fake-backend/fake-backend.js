import people from './people.json';
import planets from './planets.json';
import films from './films.json';
export function fakeAPIFetch(options) {
    if (options.url.includes('people')) {
        return handleFakeRequestForPeople(options.url);
    }
    else if (options.url.includes('planets')) {
        return handleFakeRequestForPlanets(options.url);
    }
    else if (options.url.includes('films')) {
        return handleFakeRequestForFilms(options.url);
    }
    return Promise.resolve({});
}
function handleFakeRequestForPeople(url) {
    if (url.includes('page')) {
        return handleListRequest({ url, list: people, modifierFn: modifyPerson });
    }
    else {
        return handleIndividualRequest({
            url,
            list: people,
            modifierFn: modifyPerson,
        });
    }
}
function handleFakeRequestForPlanets(url) {
    if (url.includes('page')) {
        return handleListRequest({ url, list: planets, modifierFn: modifyPlanet });
    }
    else {
        return handleIndividualRequest({
            url,
            list: planets,
            modifierFn: modifyPlanet,
        });
    }
}
function handleFakeRequestForFilms(url) {
    if (url.includes('page')) {
        return handleListRequest({ url, list: films });
    }
    else {
        return handleIndividualRequest({ url, list: films });
    }
}
function getFilmsThatMatchId({ id, key }) {
    return films.reduce((matchingFilms, film) => {
        const array = film.fields[key];
        if (array && array.includes && array.includes(parseInt(id))) {
            matchingFilms.push(`${film.pk}`);
        }
        return matchingFilms;
    }, []);
}
function getPeopleThatMatchPlanet({ planetId }) {
    return people.reduce((acc, person) => {
        if (person.fields.homeworld === parseInt(planetId)) {
            acc.push(`${person.pk}`);
        }
        return acc;
    }, []);
}
function modifyPerson(person) {
    const films = getFilmsThatMatchId({ id: person.id, key: 'characters' });
    return Object.assign(Object.assign({}, person), { homeworld: `${person.homeworld}`, films });
}
function modifyPlanet(planet) {
    const films = getFilmsThatMatchId({ id: planet.id, key: 'planets' });
    const residents = getPeopleThatMatchPlanet({ planetId: planet.id });
    return Object.assign(Object.assign({}, planet), { films,
        residents });
}
function getIndividualThing({ id, list }) {
    return list[id - 1]; // right now the lists are ordered so that index === id - 1
}
function handleIndividualRequest({ url, list, modifierFn, }) {
    const regex = /[0-9+]/;
    const match = regex.exec(url);
    const id = match && match.length === 1 ? parseInt(match[0]) : 1;
    const thing = getIndividualThing({ id, list });
    const base = Object.assign({ id: `${thing.pk}` }, thing.fields);
    let response;
    if (modifierFn) {
        response = modifierFn(base);
    }
    else {
        response = base;
    }
    return fakeNetwork(response);
}
function handleListRequest({ url, list, modifierFn }) {
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
            }
            else {
                return standardModifications;
            }
        }),
        next,
    });
}
function turnObjectIntoFakeApiResponse(obj) {
    return Object.assign(Object.assign({}, obj.fields), { id: `${obj.pk}`, url: `${obj.model.split('.')[1]}/${obj.pk}` });
}
function wrapWithData(response) {
    return { results: response };
}
function fakeNetwork(response, delay = 100) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(response);
        }, delay);
    });
}
