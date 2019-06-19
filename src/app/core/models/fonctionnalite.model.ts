import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';
import {HttpClient} from '@angular/common/http';

// @dynamic
export class FonctionnaliteModel extends ModelImpl {

    Code: string;
    CodeParent: string;
    Libelle: string;
    Description: string;
    IdModule: string;
    CodeSousModule: string;
    OrdreSousModule: string;
    Activer: string;
    Police: string;
    Ordre: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('Code'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeParent'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('Description'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdModule').setDefaultValue(0))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeSousModule'))
            .addField(new ModelMaskFieldImpl<any>().setName('OrdreSousModule'))
            .addField(new ModelMaskFieldImpl<any>().setName('Activer'))
            .addField(new ModelMaskFieldImpl<any>().setName('Police'))
            .addField(new ModelMaskFieldImpl<any>().setName('Ordre'));
    }

    public static findByCode(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.FONCTIONNALITE.GET));
        request.setData({
            ItemToSearch: {Code: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }
}




