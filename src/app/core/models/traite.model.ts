import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class TraiteModel extends ModelImpl {

    IdTraite: number;
    Libelle: string;
    NatureActivite: string;
    IdBranche: number;
    IdReassureur: number;
    IdStructure: number;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdTraite'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('NatureActivite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdBranche'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdReassureur'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdStructure'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TRAITE.GET));
        request.setData({
            ItemToSearch: {IdTraite: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




