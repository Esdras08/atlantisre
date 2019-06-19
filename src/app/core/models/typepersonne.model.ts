import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class TypepersonneModel extends ModelImpl {

    IdTypePersonne: number;
    LibelleTypePersonne: string;


    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('LibelleTypePersonne'));

    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TYPE_PERSONNE.GET));
        request.setData({
            ItemToSearch: {IdTypePersonne: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
