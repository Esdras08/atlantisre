import {PARAMETRES} from '../services/parametres';
import * as ObjectPath from 'object-path';

export class SeancesUtilities {
    public static saveLastSeance(seance: any): void {
        sessionStorage.setItem(ObjectPath.get(PARAMETRES, 'SEANCE.KEY'), JSON.stringify(seance));
    }

    public static getLastSeance(): any {
        return JSON.parse(sessionStorage.getItem(ObjectPath.get(PARAMETRES, 'SEANCE.KEY')));
    }

    public static getLastJournee(): any {
        return SeancesUtilities.getLastSeance().DateJournee;
    }
}