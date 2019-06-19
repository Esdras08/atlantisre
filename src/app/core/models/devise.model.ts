import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class DeviseModel extends ModelImpl {

    IdDevise: any;
    LibelleDevise: string;
    CodeDevise: string;
    SymboleDevise: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdDevise'))
            .addField(new ModelMaskFieldImpl<any>().setName('LibelleDevise'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeDevise'))
            .addField(new ModelMaskFieldImpl<any>().setName('SymboleDevise'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.DEVISE.GET));
        request.setData({
            ItemToSearch: {IdDevise: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
