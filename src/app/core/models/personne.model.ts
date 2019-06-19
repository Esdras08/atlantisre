import {
    ClvHttpRequest,
    HttpRequestSender,
    Model,
    ModelMask,
    ModelMaskFieldImpl,
    ModelMaskFieldType,
    ModelMaskImpl,
    RequestMethod
} from 'clv-angular-boot';
import {ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

export class PersonneModel implements Model<ValidatorFn> {

    IdPersonne: any;
    IdTypePersonne: any;
    IdCivilite: any;
    Nom: string;
    Prenom: string;
    DateNaissance: any;
    LieuNaissance: string;
    IdTypePieceIdentite: number;
    NumeroPieceIdentite: string;
    DatePieceIdentite: any;
    DateValiditePieceIdentite: any;
    IdPays: any;
    IdFormeJuridique: number;
    Actif: boolean;
    private mask: ModelMask<ValidatorFn>;

    constructor() {
        this.mask = new ModelMaskImpl()
            .setClassName('PersonneModel')
            .addField(new ModelMaskFieldImpl<any>().setName('Nom').setTitle('Nom').setDefaultValue('')
                .setType(ModelMaskFieldType.STRING).addValidator(Validators.required))
            .addField(new ModelMaskFieldImpl<any>().setName('Prenom').setTitle('Prenom').setDefaultValue('')
                .setType(ModelMaskFieldType.STRING))
            .addField(new ModelMaskFieldImpl<any>().setName('DateNaissance').setTitle('DateNaissance'))
            .addField(new ModelMaskFieldImpl<number>().setName('IdCivilite').setTitle('IdCivilite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePersonne').setTitle('IdTypePersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPersonne').setTitle('IdPersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('LieuNaissance'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePieceIdentite').setTitle('IdTypePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroPieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('DatePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValiditePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValiditePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdFormeJuridique'));

    }

    public getMask(): ModelMask<ValidatorFn> {
        return this.mask;
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PERSONNE.GET));
        request.setData({
            ItemToSearch: {IdPersonne: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}
