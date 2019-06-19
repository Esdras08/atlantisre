import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class ProcessusModel extends ModelImpl {

    IdProcessus: number;
    IdAffaire: string;
    IdTypeProcessus: string;
    Categorie: any;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdProcessus'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdAffaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypeProcessus'))
            .addField(new ModelMaskFieldImpl<any>().setName('Categorie'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROCESSUS.GET));
        request.setData({
            ItemToSearch: {IdProcessus: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




