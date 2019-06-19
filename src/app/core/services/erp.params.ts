export const ERP = {
    SensOperationBoursiere: {
        Achat: 'ACH',
        Vente: 'VET',
        Souscription: 'SOUSC'
    },
    EtatCompte: {
        EN_ATTENTE: '00',
        OPERATIONNEL: '01',
        AJOURNE: '02',
        REJETE: '03',
        ENCOURS: '04', // en cours de validation
        SUSPENDU: '07',
        CLOTURE: '06',
        ATTENTE_CLOTURE: '05'
    },
    EtatOperation: {
        Nouveau: 'Nouveau',
        Valide: 'Validé',
        EnAttente: 'En Attente',
        Effectue: 'Effectué',
        Rejete: 'Rejeté',
        Annule: 'Annulé',
        Annonce: 'Annoncé',
        Facture: 'Facturé',
        Paye: 'Payé',
        Oui: 'Oui',
        Non: 'Non',
        Actif: 'Actif',
        InActif: 'Inactif',
        EnCours: 'En Cours',
        Envoyes: 'Envoyés',
        NonEnvoyes: 'Non envoyés',
        EnValidation: 'En Validation',
        AValider: 'A Valider',
        Invalide: 'Invalide',
        EtatValide: 'Valide',
        Transmis: 'Transmis',
        Receptionne: 'Réceptionné'
    },
    Operation: {
        Save: 'SAVE',
        Valider: 'VALIDER',
        Annuler: 'ANNULER',
        Actualiser: 'ACTUALISER',
        Rechercher: 'SEARCH',
        Activer: 'ACTIVER',
        Lever: 'LEVER',
        Forcer: 'FORCER',
        Supprimer: 'SUPPRIMER',
        AnnulerValidation: 'ANNULER_VALIDATION',
        Receptionne: 'RECEPTIONNER'
    },
    UrlControlers: {
        Generated: 'ReCtrl',
        Ctrl: ''
    }
};
