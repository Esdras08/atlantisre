import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class ProfilModel extends ModelImpl {

    IdProfil: number;
    CodeProfil: string;
    Intitule: string;
    Description: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdProfil'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeProfil'))
            .addField(new ModelMaskFieldImpl<any>().setName('Intitule'))
            .addField(new ModelMaskFieldImpl<any>().setName('Description'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROFIL.GET));
        request.setData({
            ItemToSearch: {IdProfil: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




