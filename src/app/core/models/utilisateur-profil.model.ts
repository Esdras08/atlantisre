import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class UtilisateurProfilModel extends ModelImpl {

    IdUtilisateurFonctionnalite: number;
    IdUtilisateur: string;
    IdProfil: string;
    DateValiditeDebut: string;
    DateValiditeFin: string;
    DateFinIndeterminer: string;
    Autorise: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdUtilisateurFonctionnalite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdUtilisateur'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdProfil'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValiditeDebut').setDefaultValue(new Date(Date.now())))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValiditeFin').setDefaultValue(new Date(Date.now())))
            .addField(new ModelMaskFieldImpl<any>().setName('DateFinIndeterminer').setDefaultValue(new Date(Date.now())))
            .addField(new ModelMaskFieldImpl<any>().setName('Autorise'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR_PROFIL.GET));
        request.setData({
            ItemToSearch: {IdUtilisateurFonctionnalite: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




