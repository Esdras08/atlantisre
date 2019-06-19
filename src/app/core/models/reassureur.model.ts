import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class ReassureurModel extends ModelImpl {

    IdReassureur: number;
    NomReassureur: string;
    CodeReassureur: string;
    IdPays: number;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdReassureur'))
            .addField(new ModelMaskFieldImpl<any>().setName('NomReassureur'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeReassureur'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.REASSUREUR.GET));
        request.setData({
            ItemToSearch: {IdReassureur: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




