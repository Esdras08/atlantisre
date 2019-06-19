import {InputObjectImpl} from 'clv-angular-boot';

export class InputObjectV2 extends InputObjectImpl<any> {
    private objj: any;
    constructor() {
        super();
    }
    public setObject(obj: any): this {
        this.objj = obj;
        return this;
    }

    public getObject(): any {
        return this.objj;
    }
}