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

export class AssureModel implements Model<ValidatorFn> {

    constructor() {
        this.mask = new ModelMaskImpl()
            .setClassName('AssureModel')
            .addField(new ModelMaskFieldImpl<any>().setName('IdAssure').setTitle('IdAssure').setDefaultValue(''))
            .addField(new ModelMaskFieldImpl<any>().setName('Nom').setTitle('Nom').setDefaultValue(''))
            .addField(new ModelMaskFieldImpl<any>().setName('Prenom').setTitle('Prenom').setDefaultValue(''))
            .addField(new ModelMaskFieldImpl<any>().setName('DateNaissance').setTitle('DateNaissance'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroAssure').setTitle('NumeroAssure'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdFiliale').setTitle('IdFiliale'))
            .addField(new ModelMaskFieldImpl<number>().setName('IdCivilite').setTitle('IdCivilite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePersonne').setTitle('IdTypePersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPersonne').setTitle('IdPersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('LieuNaissance'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePieceIdentite').setTitle('IdTypePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroPieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('DatePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValiditePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('RegistreCommerce'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'))
            .addField(new ModelMaskFieldImpl<any>().setName('RaisonSociale'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdFormeJuridique'));

    }

    IdAssure: number;
    NumeroAssure: string;
    IdFiliale: number;
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
    RegistreCommerce: string;
    RaisonSociale: string;
    IdPays: any;
    IdFormeJuridique: number;
    Actif: boolean;
    private mask: ModelMask<ValidatorFn>;

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ASSURE.GET));
        request.setData({
            ItemToSearch: {IdAssure: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

    public getMask(): ModelMask<ValidatorFn> {
        return this.mask;
    }
}
