import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';

export class ProfessionModel extends ModelImpl {

    Libelle: string;
    Description: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('Description'));

    }


}
