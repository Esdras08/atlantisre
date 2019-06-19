import {ModelImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';

export abstract class ModelRe extends ModelImpl {
    constructor() {
        super();
    }

    abstract findById(httpClient: HttpClient, id: number);

}
