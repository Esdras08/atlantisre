import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

export class StructureModel extends ModelImpl {

    IdStructure: string;
    RaisonSocialeStructure: string;
    DecretCreation: string;
    NumeroAgrement: string;
    IdDevise: number;
    CapitalSocial: any;
    IdPays: number;
    ModifiedBy: any;


    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdStructure'))
            .addField(new ModelMaskFieldImpl<any>().setName('RaisonSocialeStructure'))
            .addField(new ModelMaskFieldImpl<any>().setName('DecretCreation'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroAgrement'))
            .addField(new ModelMaskFieldImpl<any>().setName('CapitalSocial'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdDevise'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STRUCTURE.GET));
        request.setData({
            ItemToSearch: {IdStructure: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
