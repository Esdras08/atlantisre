// France
export const locale = {
    lang: 'fr',
    data: {
        APPS: {
            TITLE: 'ATLANTIS RE',
            CONTENT_HEADERS: {
                PARAMETRAGE: {
                    TITLE: 'Parameters',
                    BASE: {
                        TITLE: 'Paramètres de bases'
                    },
                    METIER: {
                        TITLE: 'Paramètres métiers'
                    }
                },
                PLACEMENT_EN_FAC: {
                    TITLE: 'Placement en facultaive'
                },
                SINISTRE: {
                    TITLE: 'Sinistre'
                },
                ECHANGES: {
                    TITLE: 'Echanges'
                },
                MOUVEMENT_DE_TRESORIE: {
                    TITLE: 'Mouvement de trésorerie',
                    ENCAISSEMENT: {
                        TITLE: 'Encaissement'
                    },
                    DECAISSEMENT: {
                        TITLE: 'Decaissement'
                    }
                },
                ADMINISTRATION: {
                    TITLE: 'Administration'
                },
                TABLEAU_DE_BORD: {
                    TITLE: 'Tableau de bord'
                }
            },
            TABLE: {
                NO_DATA_MESSAGE: 'Aucune donnée disponible pour le moment'
            },
            ACTIONS: {
                ADD: 'Ajouter',
                SAVE: 'Enregistrer',
                CANCEL: 'Annuler',
                CLOSE: 'Fermer',
                UPDATE_TOOLTIP: 'Modifier l\'élément',
                DELETE_TOOLTIP: 'Supprimer \'élément'
            },
            BOOL_TO_STR: {
                YES: 'Oui',
                NO: 'Non',
            },
            CARDS: {
                PLACEMENT_EN_FAC: {
                    BUTTON: {
                        ADD: 'Ajouter',
                        LIST: 'Liste',
                    }
                }
            }
        },
        PLACEMENT_EN_FAC: {
            TABLE: {
                COLUMNS: {
                    DATE_CONSULTATION: 'Date de Consultation',
                    DATE_EFFET: 'Date de Consultation',
                    DATE_ECHEANCE: 'Date de Consultation',
                    EN_COURS: 'Date de Consultation',
                    GARANTIE_CEDEE: 'Garantie Cedée',
                    PRIME: 'Prime',
                    SMP: 'Smp',
                    PART_FILIALE: 'Part de la Filiale',
                    VERSEMENT_AU_TRAITE: 'versement au traité',
                    IDPROCESSUS: 'Processus',
                    IDPAYS: 'Pays',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                DATE_CONSULTATION: {
                    PLACEHOLDER: 'Date',
                    HINT: 'Entrez la date de consultation',
                },
                DATE_EFFET: {
                    PLACEHOLDER: 'Date d\'effet',
                    HINT: 'Entrez la date d\'effet',
                },
                DATE_ECHEANCE: {
                    PLACEHOLDER: 'Date d\'échance',
                    HINT: 'Entrez la cate d\'échance',
                },
                EN_COURS: {
                    PLACEHOLDER: 'En cours',
                    HINT: 'Période de garantie en cours ?',
                },
                GARANTIE_CEDEE: {
                    PLACEHOLDER: 'Garantie Cedée',
                    HINT: 'Entrez la Garantie Cedée',
                },
                PRIME: {
                    PLACEHOLDER: 'Prime',
                    HINT: 'Entrez la  prime',
                },
                SMP: {
                    PLACEHOLDER: 'SMP',
                    HINT: 'Entrez le SMP',
                },
                PART_FILIALE: {
                    PLACEHOLDER: 'Part de la filiale',
                    HINT: 'Entrez la part de la filiale',
                },
                VERSEMENT_AU_TRAITE: {
                    PLACEHOLDER: 'Versement au traité',
                    HINT: 'Entrez le Versement au traité',
                },
                IDPROCESSUS: {
                    PLACEHOLDER: 'Processus',
                    HINT: 'Selectionnez  le processus',
                },
                IDPAYS: {
                    PLACEHOLDER: 'Pays',
                    HINT: 'Selectionnez  le pays',
                }
            }
        },
        DEVISE: {
            TABLE: {
                COLUMNS: {
                    CODE: 'Code',
                    LIBELLE: 'Libellé',
                    SYMBOLE: 'Symbole',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez un code pour la devise',
                },
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Libellé de la devise',
                },
                SYMBOLE: {
                    PLACEHOLDER: 'Symbole',
                    HINT: 'Symbole de la devise',
                },
            }
        },
        PAYS: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    NATIONALITE: 'Nationalité',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé pour le pays',
                },
                NATIONALITE: {
                    PLACEHOLDER: 'Nationalité',
                    HINT: 'Entrez la nationalité pour le pays',
                },
            }
        },
        STRUCTURE: {
            TABLE: {
                COLUMNS: {
                    ID_STRUCTURE: 'Id Structure',
                    RAISON_SOCIALE: 'Raison Sociale',
                    DATE_CREATION: 'Date Création',
                    DECRET: 'Décret',
                    NUMERO_AGREMENT: 'Numéro Agrément',
                    DEVISE: 'Devise',
                    CAPITAL_SOCIAL: 'Capital Social',
                    PAYS: 'Pays',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                RAISON_SOCIALE: {
                    PLACEHOLDER: 'Raison Sociale',
                    HINT: 'Entrez une raison sociale',
                },
                DECRET: {
                    PLACEHOLDER: 'Décret',
                    HINT: 'Entrez un décret',
                },
                NUMERO_AGREMENT: {
                    PLACEHOLDER: 'Numéro d\'Agrément',
                    HINT: 'Entrez un numéro',
                },
                DEVISE: {
                    PLACEHOLDER: 'Devise',
                    HINT: 'Selectionnez une devise',
                },
                CAPITAL_SOCIAL: {
                    PLACEHOLDER: 'Capital Social',
                    HINT: 'Entrez un Capital',
                },
                PAYS: {
                    PLACEHOLDER: 'PAYS',
                    HINT: 'Selectionnez un pays',
                },
            }
        },
        BRANCHE: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    CODE: 'Code',
                    DESCRIPTION: 'Description',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé de la branche',
                },
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez le code de la branche',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Description',
                    HINT: 'Entrez la description de la branche',
                },
            }
        },
        ASSURE: {
            TABLE: {
                COLUMNS: {
                    NUMERO_ASSURE: 'Numéro Assuré',
                    PERSONNE: 'Personne',
                    FILIALE: 'Filiale',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                NUMERO_ASSURE: {
                    PLACEHOLDER: 'Numéro Assuré',
                    HINT: 'Entrez le numéro de l\'assuré',
                },
                PERSONNE: {
                    PLACEHOLDER: 'PERSONNE',
                    HINT: 'Entrez la personne associée à l\'assuré',
                },
                FILIALE: {
                    PLACEHOLDER: 'Filiale',
                    HINT: 'Entrez la filiale associée à l\'assuré',
                }
            }
        },
        AFFAIRE: {
            TABLE: {
                COLUMNS: {
                    NUMERO_ORDRE: 'Numéro Ordre',
                    NUMERO_POLICE: 'Numéro Ploice',
                    CAPITAUX_ASSURE: 'Capitaux Assurés',
                    ACTIVITE: 'Activité',
                    STATUT_AFFAIRE: 'Statut Affaire',
                    BRANCHE: 'Branche',
                    FILIALE: 'Filiale',
                    ASSURE: 'Assuré',
                    ACTIONS: 'Actions'
                }
            },
            CARD: {
                NOUVEAU: 'Nouvelle',
                LISTE: 'Liste',
                },
            FORM: {
                NUMERO_ORDRE: {
                    PLACEHOLDER: 'Numéro d\'ordre',
                    HINT: 'Entrez le numéro d\'ordre',
                },
                NUMERO_POLICE: {
                    PLACEHOLDER: 'Numéro de police',
                    HINT: 'Entrez le numéro de police',
                },
                CAPITAUX_ASSURE: {
                    PLACEHOLDER: 'Capitaux assurés',
                    HINT: 'Entrez les capitaux assurés',
                },
                ACTIVITE: {
                    PLACEHOLDER: 'Activté',
                    HINT: 'Entrez l\'activité assurée',
                },
                STATUT_AFFAIRE: {
                    PLACEHOLDER: 'Statut Affaire',
                    HINT: 'Selectionnez le statut de l\'affaire',
                },
                BRANCHE: {
                    PLACEHOLDER: 'Branche',
                    HINT: 'Sélectionnez la branche associée à l\'affaire',
                },
                FILIALE: {
                    PLACEHOLDER: 'Filiale',
                    HINT: 'Sélectionnez la filiale de l\'affaire',
                },
                ASSURE: {
                    PLACEHOLDER: 'Assuré',
                    HINT: 'Sélectionnez l\'assuré concerné',
                }
            }
        },
        STATUT_AFFAIRE: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    DESCRIPTION: 'Description',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé du Statut Affaire',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Description',
                    HINT: 'Entrez la description du Statut Affaire',
                },
            }
        },
        STATUT_MOUVEMENT: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé du Statut Mouvement',
                }
            }
        },
        TYPE_ECHANGE: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    DESCRIPTION: 'Description',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé du Type Echange',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Description',
                    HINT: 'Entrez la description du Type Echange',
                },
            }
        },
        TYPE_PROCESSUS: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé du Type Processus',
                }
            }
        },
        ETAPE_PROCESSUS: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    DESCRIPTION: 'Descrition',
                    POSITION: 'Position',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé de l\'Etape Processus',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Descrition',
                    HINT: 'Entrez la descrition de l\'Etape Processus',
                },
                POSITION: {
                    PLACEHOLDER: 'Position',
                    HINT: 'Entrez la position de l\'Etape Processus',
                }
            }
        },
        SUIVI_PROCESSUS: {
            TABLE: {
                COLUMNS: {
                    ID_TYPE_ECHANGE: 'TYPE ECHANGE',
                    ID_ETAPE_PROCESSUS: 'ETAPE PROCESSUS',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                ID_TYPE_ECHANGE: {
                    PLACEHOLDER: 'Type Echange',
                    HINT: 'Selectionnez le Type Echange',
                },
                ID_ETAPE_PROCESSUS: {
                    PLACEHOLDER: 'Etape Processus',
                    HINT: 'Selectionnez  de l\'Etape Processus',
                }
            }
        },
        FILIALE: {
            TABLE: {
                COLUMNS: {
                    NOM: 'Nom filiale',
                    ADRESSE: 'Adresse',
                    CODE: 'Code',
                    PAYS: 'Pays',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                NOM: {
                    PLACEHOLDER: 'Nom filiale',
                    HINT: 'Entrez le nom de la filiale',
                },
                ADRESSE: {
                    PLACEHOLDER: 'Adresse filiale',
                    HINT: 'Entrez l\'adresse de la filiale',
                },
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez le code de la filiale',
                },
                PAYS: {
                    PLACEHOLDER: 'Pays',
                    HINT: 'Selectionnez le pays de la filiale',
                },
            }
        },
        REASSUREUR: {
            TABLE: {
                COLUMNS: {
                    NOM: 'Nom Réassureur',
                    CODE: 'Code',
                    PAYS: 'Pays',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                NOM: {
                    PLACEHOLDER: 'Nom filiale',
                    HINT: 'Entrez le nom du réassureur',
                },
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez le code du réassureur',
                },
                PAYS: {
                    PLACEHOLDER: 'Pays',
                    HINT: 'Sélectionnez le pays du réassureur',
                },
            }
        },
        PERSONNE: {
            TABLE: {
                COLUMNS: {
                    TYPE_PERSONNE: 'Type Assuré',
                    CIVILITE: 'Civilite',
                    NOM: 'Nom',
                    PRENOM: 'Prenom',
                    DATE_NAISSANCE: 'Date de Naissance',
                    LIEU_NAISSANCE: 'Lieu de Naissance',
                    TYPE_PIECE_IDENTITE: 'Type Piece Identite',
                    NUMERO_PIECE_IDENTITE: 'Numero Piece Identite',
                    DATE_PIECE_IDENTITE: 'Date Etablissement de la Piece d"identite',
                    DATE_VALIDITE_PIECE_IDENTITE: 'Date de validité de la Piece d"identite',
                    REGISTRE_DE_COMMERCE: 'Registre du Commerce',
                    RAISON_SOCIALE: 'Raison sociale',
                    PAYS: 'Pays',
                    FORME_JURIDIQUE: 'Forme Juridique',
                    ACTIF: 'Est Actif ?',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                TYPE_PERSONNE: {
                    PLACEHOLDER: 'Type Assuré',
                    HINT: 'Selectionnez le type de l\'assuré' ,
                },
                CIVILITE: {
                    PLACEHOLDER: 'Civilité',
                    HINT: 'Selectionnez la Civilité',
                },
                NOM: {
                    PLACEHOLDER: 'Nom',
                    HINT: 'Entrez le nom de l\'assuré',
                },
                PRENOM: {
                    PLACEHOLDER: 'Prenom de L\' assuré',
                    HINT: 'Entrez le Prenom de l\'assuré',
                },
                DATE_NAISSANCE: {
                    PLACEHOLDER: 'Date de Naissance',
                    HINT: 'Entrez la Date de Naissance de la personne',
                },
                LIEU_NAISSANCE: {
                    PLACEHOLDER: 'Lieu de Naissance',
                    HINT: 'Entrez la Lieu de Naissance de la personne',
                },
                TYPE_PIECE_IDENTITE: {
                    PLACEHOLDER: 'Type de la Pièce',
                    HINT: 'Selectionnez le type de pièce',
                },
                NUMERO_PIECE_IDENTITE: {
                    PLACEHOLDER: 'Numero de la piece',
                    HINT: 'Entrez Numero de la piece',
                },
                DATE_PIECE_IDENTITE: {
                    PLACEHOLDER: 'Date établissement de la pièce',
                    HINT: 'Entrez la date',
                },
                DATE_VALIDITE_PIECE_IDENTITE: {
                    PLACEHOLDER: 'Date de validité de la pièce',
                    HINT: 'Entrez la date de validité',
                },
                REGISTRE_DE_COMMERCE: {
                    PLACEHOLDER: 'Registre de Commerce',
                    HINT: 'Entrez le Registre de Commerce',
                },
                RAISON_SOCIALE: {
                    PLACEHOLDER: 'Raison Sociale',
                    HINT: 'Entrez la Raison Sociale',
                },
                PAYS: {
                    PLACEHOLDER: 'Pays',
                    HINT: 'Selectionner le pays',
                },
                FORME_JURIDIQUE: {
                    PLACEHOLDER: 'Forme Juridique',
                    HINT: 'Selectionner la forme juridique',
                },
                ACTIF: {
                    PLACEHOLDER: 'ACTIF',
                    HINT: 'Est actif?',
                },
            }
        },
        TRAITE: {
            TABLE: {
                COLUMNS: {
                    LIBELLE: 'Libellé',
                    NATURE_ACTIVITE: 'Nature d\'activité',
                    BRANCHE: 'Branche',
                    REASSUREUR: 'Reassureur',
                    STRUCTURE: 'Structure',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé du traité',
                },
                NATURE_ACTIVITE: {
                    PLACEHOLDER: 'Nature d\'activité',
                    HINT: 'Entrez la nature d\'activité du traité',
                },
                BRANCHE: {
                    PLACEHOLDER: 'Branche',
                    HINT: 'Sélectionnez la branche du traité',
                },
                REASSUREUR: {
                    PLACEHOLDER: 'Réassureur',
                    HINT: 'Sélectionnez le réassureur du traité',
                },
                STRUCTURE: {
                    PLACEHOLDER: 'Structure',
                    HINT: 'Sélectionnez la structutre du traité',
                },
            }
        },
        UTILISATEUR: {
            TABLE: {
                COLUMNS: {
                    NOM_PRENOM: 'Nom et Prénoms',
                    EMAIL: 'Email',
                    TELEPHONE: 'Téléphone',
                    ACTIF: 'Actif',
                    IS_CONNECTED: 'Est Connecté',
                    PROFIL: 'Profil',
                    STRUCTURE: 'Structure',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                NOM: {
                    PLACEHOLDER: 'Nom',
                    HINT: 'Entrez le nom de l\'utilisateur',
                },
                PRENOM: {
                    PLACEHOLDER: 'Prénoms',
                    HINT: 'Entrez les prénoms de l\'utilisateur',
                },
                EMAIL: {
                    PLACEHOLDER: 'Email',
                    HINT: 'Entrez une adresse email pour l\'utilisateur',
                },
                TELEPHONE: {
                    PLACEHOLDER: 'Téléphone',
                    HINT: 'Entrez un numéro de téléphone pour l\'utilisateur',
                },
                ACTIF: {
                    PLACEHOLDER: 'Actif',
                    HINT: '',
                },
                IS_CONNECTED: {
                    PLACEHOLDER: 'Est connecté',
                    HINT: '',
                },
                PROFIL: {
                    PLACEHOLDER: 'Profil',
                    HINT: 'Sélectionnez le profil de l\'utilisateur',
                },
                STRUCTURE: {
                    PLACEHOLDER: 'Structure',
                    HINT: 'Sélectionnez la structure de l\'utilisateur',
                },
                LOGIN: {
                    PLACEHOLDER: 'Login',
                    HINT: 'Définissez le login de l\'utilisateur',
                },
                PASSWORD: {
                    PLACEHOLDER: 'Mot de passe',
                    HINT: 'Définissez le mot de passe de l\'utilisateur',
                },
                REPASSWORD: {
                    PLACEHOLDER: 'Confirmez mot de passe',
                    HINT: 'Confimez le mot de passe de l\'utilisateur',
                },
                DEFINE_PASSWORD: 'Définir mot de passe'
            }
        },
        PROFIL: {
            TABLE: {
                COLUMNS: {
                    CODE: 'Code',
                    INTITULE: 'Intitulé',
                    DESCRIPTION: 'Description',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez le code du profil',
                },
                INTITULE: {
                    PLACEHOLDER: 'Intitulé',
                    HINT: 'Entrez l\'intitulé du profil',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Description',
                    HINT: 'donnez une description au profil',
                }
            }
        },
        FONCTIONNALITE: {
            TABLE: {
                COLUMNS: {
                    CODE: 'Code',
                    LIBELLE: 'Libellé',
                    DESCRIPTION: 'Description',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Entrez le code de la fonctionnalité',
                },
                LIBELLE: {
                    PLACEHOLDER: 'Libellé',
                    HINT: 'Entrez le libellé de la fonctionnalité',
                },
                DESCRIPTION: {
                    PLACEHOLDER: 'Description',
                    HINT: 'Donnez une description à la fonctionnalité',
                }
            }
        },
        UTILISATEUR_FONCTIONNALITE: {
            TABLE: {
                COLUMNS: {
                    UTILISATEUR: 'Utilisateur',
                    CODE_FONCTIONNALITE: 'Code Fonctionnalité',
                    AUTORISE: 'Est Autorisé?',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                UTILISATEUR: {
                    PLACEHOLDER: 'Utilisateur',
                    HINT: 'Sélectionnez un Utilisateur',
                },
                CODE_FONCTIONNALITE: {
                    PLACEHOLDER: 'Fonctionnalité',
                    HINT: 'Selectionnez une fonctionnalité',
                },
                AUTORISE: {
                    PLACEHOLDER: 'Est Autorisé?',
                    HINT: '',
                }
            }
        },
        PROCESSUS: {
            TABLE: {
                COLUMNS: {
                    AFFAIRE: 'Affaire',
                    TYPE_PROCESSUS: 'Type Processus',
                    CATEGORIE: 'Catégorie',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                AFFAIRE: {
                    PLACEHOLDER: 'Id Affaire',
                    HINT: 'Sélectionnez une affaire',
                },
                TYPE_PROCESSUS: {
                    PLACEHOLDER: 'Type Processus',
                    HINT: 'Selectionnez un processus',
                },
                CATEGORIE: {
                    PLACEHOLDER: 'Catégorie',
                    HINT: '',
                }
            }
        },
        SCHEMA_PLACEMENT: {
            TABLE: {
                COLUMNS: {
                    PARTS_SOUSCRITES: '1. Parts Souscrites',
                    CESSION_FAC: '2. Cession Facultatives',
                    RETENTION: 'Rétention:',
                    CESSION_LEGALE_FAC: 'Cession Légale FAC (SEN RE)',
                    PCT: 'Pct (%)',
                    CAPITAUX_ASSURES: 'Capitaux assurés',
                    PRIMES: 'Primes',
                    TAUX_COM: 'Taux com',
                    COMISSIONS: 'Comissions',
                    PRIME_NETTE: 'Prime nette',
                    ACTIONS: '',
                },
                FOOTERS: {
                    TOTAL_HORS_CESSION_FAC: 'Total Hors Cession FAC',
                    TOTAL_CESSIONS_FAC: 'Total Cessions FAC',
                    TOTAL_PROGRAMME_RISQUE: 'Total Programme Risque',
                }
            }
        },

        CURRENCY: {
            SELECT: 'Choisissez votre monnaie',
        },
        TRANSLATOR: {
            SELECT: 'Choisissez votre langue',
        },
        MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            REPORTS: 'Rappots',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord',
            ADMINISTRATION: {
                TITRE: 'Administration',
                UTILISATEURS: 'Gestion des utilisateurs',
            },
            PARAMETRAGE: 'Paramétrage',
            EMETTEUR: {
                EMETTEUR: 'Emetteur',
                GESTION: 'Gestion des Emetteurs',
                ETATSFINANCIERS: 'Gestion des Etats Financiers',
            },
            EVALUATION: 'Evaluation',
        },
        AUTH: {
            GENERAL: {
                OR: 'Ou',
                SUBMIT_BUTTON: 'Soumettre',
                NO_ACCOUNT: 'Ne pas avoir de compte?',
                SIGNUP_BUTTON: 'Registre',
                FORGOT_BUTTON: 'Mot de passe oublié',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Créer un compte',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Mot de passe',
                CONFIRM_PASSWORD: 'Confirm Password',
            },
            VALIDATION: {
                INVALID: '{{name}} n\'est pas valide',
                REQUIRED: '{{name}} est requis',
                MIN_LENGTH: '{{name}} minimum length is {{min}}'
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés:'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Les clients',
                CUSTOMERS_LIST: 'Liste des clients',
                NEW_CUSTOMER: 'Nouveau client',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Suppression du client',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                    WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                    MESSAGE: 'Le client a été supprimé'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Supprimer les clients',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                    WAIT_DESCRIPTION: 'Les clients suppriment ...',
                    MESSAGE: 'Les clients sélectionnés ont été supprimés'
                },
                UPDATE_STATUS: {
                    TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                    MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Le client a été mis à jour',
                    ADD_MESSAGE: 'Le client a été créé'
                }
            }
        }
    }
};




