import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class UtilisateurModel extends ModelImpl {

    IdUtilisateur: number;
    Login: string;
    Password: string;
    Nom: string;
    Prenom: string;
    Email: string;
    Telephone: string;
    Actif: string;
    IsConnected: string;
    IdProfil: string;
    IdStructure: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdUtilisateur'))
            .addField(new ModelMaskFieldImpl<any>().setName('Login'))
            .addField(new ModelMaskFieldImpl<any>().setName('Password'))
            .addField(new ModelMaskFieldImpl<any>().setName('Nom'))
            .addField(new ModelMaskFieldImpl<any>().setName('Prenom'))
            .addField(new ModelMaskFieldImpl<any>().setName('Email'))
            .addField(new ModelMaskFieldImpl<any>().setName('Telephone'))
            .addField(new ModelMaskFieldImpl<any>().setName('Actif'))
            .addField(new ModelMaskFieldImpl<any>().setName('IsConnected'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdProfil'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdStructure'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR.GET));
        request.setData({
            ItemToSearch: {IdUtilisateur: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




