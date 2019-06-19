import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class ProfilFonctionnaliteModel extends ModelImpl {

    IdProfilFonctionnalite: number;
    IdProfil: string;
    CodeFonctionnalite: string;
    Autorise: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdProfilFonctionnalite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdProfil'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeFonctionnalite'))
            .addField(new ModelMaskFieldImpl<any>().setName('Autorise'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROFIL_FONCTIONNALITE.GET));
        request.setData({
            ItemToSearch: {IdProfilFonctionnalite: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




