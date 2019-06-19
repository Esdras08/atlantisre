import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';

export class SecteuractiviteModel extends ModelImpl {

    Libelle: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'));

    }


}
