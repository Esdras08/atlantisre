import {InfoSearchModel} from './info-search.model';
import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';

export class OrdreExtranetDto extends ModelImpl {
    SoldeDisponible: number;
    CalculerMontant: string;
    IdOrdreExtranet: number;
    Numero: string;
    IdTitre: number;
    IdCompte: number;
    Libelle: string;
    IdTypeOrdre: number;
    IdSensOrdre: number;
    Quantite: number;
    Cour: number;
    Montant: number;
    FraisCourtage: number;
    FraisTOB: number;
    CommissionBourse: number;
    CommissionDepositaire: number;
    MontantTotal: number;
    QuantiteMin: number;
    Validite: string;
    EtatOrdre: string;
    Actif: boolean;
    IsDeleted: boolean;
    DateDebut: any;
    DateFin: any;
    Entite: string;
    IdEntite: number;
    Transmis: string;
    IdTransmetteur: number;
    TransmisPar: string;
    DateTransmission: any;
    HeureTransmission: any;
    Receptionner: string;
    IdReceptionneur: number;
    ReceptionnerPar: string;
    DateReception: any;
    HeureReception: any;
    Valider: string;
    IdValideur: number;
    ValiderPar: string;
    DateValidation: any;
    HeureValidation: any;
    Annuler: string;
    IdAnnuleur: number;
    AnnulerPar: number;
    DateAnnulation: any;
    HeureAnnulation: any;
    DateCreation: any;
    DateMaj: any;
    CreatedBy: number;
    ModifiedBy: number;
    NoteClient: string;
    Observation: string;
    IdSociete: number;
    MailEnvoye: string;
    InfoSearchIdOrdreExtranet: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchNumero: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdTitre: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchIdCompte: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchLibelle: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdTypeOrdre: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchIdSensOrdre: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchQuantite: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchCour: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchMontant: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchFraisCourtage: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchFraisTOB: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchCommissionBourse: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchCommissionDepositaire: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchMontantTotal: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchQuantiteMin: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchValidite: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchEtatOrdre: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchActif: InfoSearchModel<boolean> = new InfoSearchModel<boolean>();
    InfoSearchIsDeleted: InfoSearchModel<boolean> = new InfoSearchModel<boolean>();
    InfoSearchDateDebut: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchDateFin: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchEntite: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdEntite: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchTransmis: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdTransmetteur: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchTransmisPar: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchDateTransmission: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchHeureTransmission: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchReceptionner: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdReceptionneur: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchReceptionnerPar: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchDateReception: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchHeureReception: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchValider: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdValideur: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchValiderPar: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchDateValidation: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchHeureValidation: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchAnnuler: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdAnnuleur: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchAnnulerPar: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchDateAnnulation: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchHeureAnnulation: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchDateCreation: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchDateMaj: InfoSearchModel<any> = new InfoSearchModel<any>();
    InfoSearchCreatedBy: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchModifiedBy: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchNoteClient: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchObservation: InfoSearchModel<string> = new InfoSearchModel<string>();
    InfoSearchIdSociete: InfoSearchModel<number> = new InfoSearchModel<number>();
    InfoSearchMailEnvoye: InfoSearchModel<string> = new InfoSearchModel<string>();
    RowsCount: number;
    Offset: number;
    Rows: number;
    CrDateDebut: any;
    CrDateFin: any;
    CodeOperation: string;
    Action: string;

    constructor() {
        super();
        this.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('SoldeDisponible'))
            .addField(new ModelMaskFieldImpl<any>().setName('CalculerMontant'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdOrdreExtranet'))
            .addField(new ModelMaskFieldImpl<any>().setName('Numero'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTitre'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdCompte'))
            .addField(new ModelMaskFieldImpl<any>().setName('Libelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTypeOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdSensOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('Quantite'))
            .addField(new ModelMaskFieldImpl<any>().setName('Cour'))
            .addField(new ModelMaskFieldImpl<any>().setName('Montant'))
            .addField(new ModelMaskFieldImpl<any>().setName('FraisCourtage'))
            .addField(new ModelMaskFieldImpl<any>().setName('FraisTOB'))
            .addField(new ModelMaskFieldImpl<any>().setName('CommissionBourse'))
            .addField(new ModelMaskFieldImpl<any>().setName('CommissionDepositaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('MontantTotal'))
            .addField(new ModelMaskFieldImpl<any>().setName('QuantiteMin'))
            .addField(new ModelMaskFieldImpl<any>().setName('Validite'))
            .addField(new ModelMaskFieldImpl<any>().setName('EtatOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('Actif'))
            .addField(new ModelMaskFieldImpl<any>().setName('IsDeleted'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateDebut'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateFin'))
            .addField(new ModelMaskFieldImpl<any>().setName('Entite'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdEntite'))
            .addField(new ModelMaskFieldImpl<any>().setName('Transmis'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdTransmetteur'))
            .addField(new ModelMaskFieldImpl<any>().setName('TransmisPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateTransmission'))
            .addField(new ModelMaskFieldImpl<any>().setName('HeureTransmission'))
            .addField(new ModelMaskFieldImpl<any>().setName('Receptionner'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdReceptionneur'))
            .addField(new ModelMaskFieldImpl<any>().setName('ReceptionnerPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateReception'))
            .addField(new ModelMaskFieldImpl<any>().setName('HeureReception'))
            .addField(new ModelMaskFieldImpl<any>().setName('Valider'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdValideur'))
            .addField(new ModelMaskFieldImpl<any>().setName('ValiderPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateValidation'))
            .addField(new ModelMaskFieldImpl<any>().setName('HeureValidation'))
            .addField(new ModelMaskFieldImpl<any>().setName('Annuler'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdAnnuleur'))
            .addField(new ModelMaskFieldImpl<any>().setName('AnnulerPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateAnnulation'))
            .addField(new ModelMaskFieldImpl<any>().setName('HeureAnnulation'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateCreation'))
            .addField(new ModelMaskFieldImpl<any>().setName('DateMaj'))
            .addField(new ModelMaskFieldImpl<any>().setName('CreatedBy'))
            .addField(new ModelMaskFieldImpl<any>().setName('ModifiedBy'))
            .addField(new ModelMaskFieldImpl<any>().setName('NoteClient'))
            .addField(new ModelMaskFieldImpl<any>().setName('Observation'))
            .addField(new ModelMaskFieldImpl<any>().setName('IdSociete'))
            .addField(new ModelMaskFieldImpl<any>().setName('MailEnvoye'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdOrdreExtranet'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchNumero'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdTitre'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdCompte'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchLibelle'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdTypeOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdSensOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchQuantite'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchCour'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchMontant'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchFraisCourtage'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchFraisTOB'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchCommissionBourse'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchCommissionDepositaire'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchMontantTotal'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchQuantiteMin'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchValidite'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchEtatOrdre'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchActif'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIsDeleted'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateDebut'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateFin'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchEntite'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdEntite'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchTransmis'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdTransmetteur'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchTransmisPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateTransmission'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchHeureTransmission'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchReceptionner'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdReceptionneur'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchReceptionnerPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateReception'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchHeureReception'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchValider'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdValideur'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchValiderPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateValidation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchHeureValidation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchAnnuler'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdAnnuleur'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchAnnulerPar'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateAnnulation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchHeureAnnulation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateCreation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchDateMaj'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchCreatedBy'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchModifiedBy'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchNoteClient'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchObservation'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchIdSociete'))
            .addField(new ModelMaskFieldImpl<any>().setName('InfoSearchMailEnvoye'))
            .addField(new ModelMaskFieldImpl<any>().setName('RowsCount'))
            .addField(new ModelMaskFieldImpl<any>().setName('Offset'))
            .addField(new ModelMaskFieldImpl<any>().setName('Rows'))
            .addField(new ModelMaskFieldImpl<any>().setName('CrDateDebut'))
            .addField(new ModelMaskFieldImpl<any>().setName('CrDateFin'))
            .addField(new ModelMaskFieldImpl<any>().setName('CodeOperation'))
            .addField(new ModelMaskFieldImpl<any>().setName('Action'));
    }
}
