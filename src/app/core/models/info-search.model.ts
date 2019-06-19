import {IntervalleModel} from './intervalle.model';

export class InfoSearchModel<T> {
    Consider: boolean;
    IsOrderByField: boolean;
    IsSumField: boolean;
    Sum: number;
    Intervalle: IntervalleModel<T>;
    OperatorToUse: string;
}
