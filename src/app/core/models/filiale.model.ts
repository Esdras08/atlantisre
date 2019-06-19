import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class FilialeModel extends ModelImpl {

    IdFiliale: number;
    NomFilliale: string;
    AdresseFiliale: string;
    CodeFiliale: any;
    IdPays: any;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdFiliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('NomFilliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('AdresseFiliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeFiliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.BRANCHE.GET));
        request.setData({
            ItemToSearch: {IdFiliale: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




