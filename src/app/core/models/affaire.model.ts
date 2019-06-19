import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class AffaireModel extends ModelImpl {

    IdAffaire: number;
    NumeroOrdre: string;
    NumeroPolice: string;
    CapitauxAssure: number;
    Activite: string;
    IdStatutAffaire: number;
    IdBranche: number;
    IdFiliale: number;
    IdAssure: number;


    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdAffaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroPolice'))
            .addField(new ModelMaskFieldImpl<any>().setName('CapitauxAssure'))
            .addField(new ModelMaskFieldImpl<any>().setName('Activite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdStatutAffaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdBranche'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdFiliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdAssure'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.AFFAIRE.GET));
        request.setData({
            ItemToSearch: {IdAffaire: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
