import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class EtapeProcessusModel extends ModelImpl {

    IdEtapeProcessus: any;
    Libelle: string;
    Description: string;
    Position: number;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdEtapeProcessus'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('Description'))
            .addField(new ModelMaskFieldImpl<any>().setName('Position'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ETAPE_PROCESSUS.GET));
        request.setData({
            ItemToSearch: {IdEtapeProcessus: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
