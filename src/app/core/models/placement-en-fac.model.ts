import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';

// @dynamic
export class PlacementEnFacModel extends ModelImpl {

    IdDemandePlacementFacultative: number;
    DateConsultation: any;
    DateEffet: any;
    DateEcheance: any;
    GarantieCedee: any;
    Prime: any;
    SMP: any;
    PartFiliale: any;
    VersementAuTraite: boolean;
    EnCours: boolean;
    IdProcessus: number;
    IdPays: number;


    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<number>().setName('IdDemandePlacementFacultative'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateConsultation'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateEffet'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateEcheance'))
            .addField(new ModelMaskFieldImpl<any>().setName('EnCours'))
            .addField(new ModelMaskFieldImpl<any>().setName('GarantieCedee'))
            .addField(new ModelMaskFieldImpl<any>().setName('Prime'))
            .addField(new ModelMaskFieldImpl<any>().setName('SMP'))
            .addField(new ModelMaskFieldImpl<any>().setName('PartFiliale'))
            .addField(new ModelMaskFieldImpl<boolean>().setName('VersementAuTraite'))
            .addField(new ModelMaskFieldImpl<number>().setName('IdProcessus'))
            .addField(new ModelMaskFieldImpl<number>().setName('IdPays'));


    }

    /*public static findById(httpClient: HttpClient, id: number) {
        const sender = new HttpRequestSender(httpClient);
        const request = new ClvHttpRequest();
        request.setMethod(RequestMethod.POST);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.CIVILITE.GET));
        request.setData({
            ItemToSearch: {IdCivilite: id}
        });
        sender.setRequest(request);
        return sender.sendRequest();
    }*/

}
