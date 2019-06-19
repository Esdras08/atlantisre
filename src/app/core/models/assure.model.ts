import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class AssureModel extends ModelImpl {

    IdAssure: number;
    NumeroAssure: string;
    IdFiliale: number;
    IdPersonne: number;
    CreateOn: any;
    ModifiedOn: any;
    CreateBy: number;
    ModifiedBy: number;
    IsDeleted: boolean;
    CreatedBy: number;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdAssure'))
            .addField(new ModelMaskFieldImpl<any>().setName('NumeroAssure'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdFiliale'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdPersonne'))
            .addField(new ModelMaskFieldImpl<any>().setName('CreateOn').setDefaultValue(new Date()))
            .addField(new ModelMaskFieldImpl<any>().setName('ModifiedOn').setDefaultValue(new Date()))
            .addField(new ModelMaskFieldImpl<any>().setName('IsDeleted'))
            .addField(new ModelMaskFieldImpl<any>().setName('ModifiedBy'))
            .addField(new ModelMaskFieldImpl<any>().setName('CreateBy'));
    }

    public static findById(httpClient: HttpClient, id: number) {
        const paysSender = new HttpRequestSender(httpClient);
        const paysRequest = new ClvHttpRequest();
        paysRequest.setMethod(RequestMethod.POST);
        paysRequest.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ASSURE.GET));
        paysRequest.setData({
            ItemToSearch: {IdPays: id}
        });
        paysSender.setRequest(paysRequest);
        return paysSender.sendRequest();
    }
}




