import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class PaysModel extends ModelImpl {

    IdPays: number;
    Libelle: string;
    LibelleNationnalite: string;
    CreateOn: any;
    ModifiedOn: any;
    CreateBy: number;
    ModifiedBy: number;
    IsDeleted: boolean;
    CreatedBy: number;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdPays'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('LibelleNationnalite'))
            .addField(new ModelMaskFieldImpl<any>().setName('CreateOn').setDefaultValue(new Date()))
            .addField(new ModelMaskFieldImpl<any>().setName('ModifiedOn').setDefaultValue(new Date()))
            .addField(new ModelMaskFieldImpl<any>().setName('IsDeleted'))
            .addField(new ModelMaskFieldImpl<any>().setName('CreateBy'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PAYS.GET));
        request.setData({
            ItemToSearch: {IdPays: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




