import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class StatutAffaireModel extends ModelImpl {

    IdStatutAffaire: any;
    Libelle: string;
    Description: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdStatutAffaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('Description'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STATUT_AFFAIRE.GET));
        request.setData({
            ItemToSearch: {IdStatutAffaire: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
