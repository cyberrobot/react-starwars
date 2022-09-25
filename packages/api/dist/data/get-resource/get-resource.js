var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { apiUrl } from '../../constants';
function getPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'people' });
    });
}
function getPlanet() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'planets' });
    });
}
function getFilm() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'films' });
    });
}
function getSpecie() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'species' });
    });
}
function getVehicle() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'vehicles' });
    });
}
function getStarship() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield resource({ resource: 'starships' });
    });
}
function resource({ resource }) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = apiUrl + resource;
        return (yield axios.get(url)).data;
    });
}
export function getResource({ resource }) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (resource) {
            case 'people':
                return yield getPeople();
            case 'planets':
                return yield getPlanet();
            case 'films':
                return yield getFilm();
            case 'species':
                return yield getSpecie();
            case 'vehicles':
                return yield getVehicle();
            case 'starships':
                return yield getStarship();
        }
    });
}
