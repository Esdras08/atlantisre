import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class SuiviProcessusModel extends ModelImpl {

    IdTypeEchange: any;
    IdEtapeProcessus: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypeEchange'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdEtapeProcessus'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SUIVI_PROCESSUS.GET));
        request.setData({
            ItemToSearch: {IdTypeEchange: id}
            // Normalement la clé de cette table c'est les deux ids en même temps
            // ItemToSearch: {IdTypeEchange: id, IdEtapeProcessus: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
