import {ClvHttpRequest, HttpRequestSender, ModelImpl, ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {ERP} from '../services/erp.params';
import {API} from '../services/api-services.params';

// @dynamic
export class PieceIdentiteModel extends ModelImpl {

    IdTypePieceIdentite: number;
    Libelle: string;


    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypePieceIdentite'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'));

    }

    public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TYPE_PIECE_IDENTITE.GET));
        request.setData({
            ItemToSearch: {IdTypePieceIdentite: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }

}
