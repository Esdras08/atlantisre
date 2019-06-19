// USA
export const locale = {
    lang: 'en',
    data: {
        APPS: {
            TITLE: 'ATLANTIS RE',
            CONTENT_HEADERS: {
                PARAMETRAGE: {
                    TITLE: 'Parameters',
                    BASE: {
                        TITLE: 'Basic parameters'
                    },
                    METIER: {
                        TITLE: 'Specific parameters'
                    }
                },
                PLACEMENT_EN_FAC: {
                    TITLE: 'Optional Placement'
                },
                SINISTRE: {
                    TITLE: 'Sinister'
                },
                ECHANGES: {
                    TITLE: 'Exchanges'
                },
                MOUVEMENT_DE_TRESORIE: {
                    TITLE: 'Cashflow',
                    ENCAISSEMENT: {
                        TITLE: 'Incoming'
                    },
                    DECAISSEMENT: {
                        TITLE: 'Outgouing'
                    }
                },
                ADMINISTRATION: {
                    TITLE: 'ADMINISTRATION'
                },
                TABLEAU_DE_BORD: {
                    TITLE: 'Dashboard'
                }
            },
            TABLE: {
                NO_DATA_MESSAGE: 'No datass available at the moment'
            },
            ACTIONS: {
                ADD: 'Add',
                SAVE: 'Save',
                CANCEL: 'Cancel',
                UPDATE_TOOLTIP: 'Edit item',
                DELETE_TOOLTIP: 'Delete item'
            }
        },
        DEVISE: {
            TABLE: {
                COLUMNS: {
                    CODE: 'Code',
                    LIBELLE: 'Label',
                    SYMBOLE: 'Symbol',
                    ACTIONS: 'Actions'
                }
            },
            FORM: {
                CODE: {
                    PLACEHOLDER: 'Code',
                    HINT: 'Enter a code for the currency',
                },
                LIBELLE: {
                    PLACEHOLDER: 'Label',
                    HINT: 'Common name',
                },
                SYMBOLE: {
                    PLACEHOLDER: 'Symbol',
                    HINT: 'Currency symbol',
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
                    PLACEHOLDER: 'Label',
                    HINT: 'Enter the label for the country',
                },
                NATIONALITE: {
                    PLACEHOLDER: 'Nationality',
                    HINT: 'Enter the nationality for the country',
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
                    PLACEHOLDER: 'Company name',
                    HINT: 'Enter the company name',
                },
                DECRET: {
                    PLACEHOLDER: 'Decree',
                    HINT: 'Enter a Decree',
                },
                NUMERO_AGREMENT: {
                    PLACEHOLDER: 'Approval number',
                    HINT: 'Enter a number',
                },
                DEVISE: {
                    PLACEHOLDER: 'Currency',
                    HINT: 'Select a currency',
                },
                CAPITAL_SOCIAL: {
                    PLACEHOLDER: 'Share capital',
                    HINT: 'Enter a Share capital',
                },
                PAYS: {
                    PLACEHOLDER: 'Country',
                    HINT: 'Select un Country',
                },
            }
        },

        CURRENCY: {
            SELECT: 'Select your currency',
        },
        TRANSLATOR: {
            SELECT: 'Select your language',
        },
        MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            REPORTS: 'Reports',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard',
            ADMINISTRATION: {
                TITRE: 'Management',
                UTILISATEURS: 'User Management',
            },
            PARAMETRAGE: 'Parameters',
            EMETTEUR: {
                EMETTEUR: 'Issuer',
                GESTION: 'Issuers Management',
                ETATSFINANCIERS: 'Financial state',
            },
            EVALUATION: 'Evaluation',
        },
        AUTH: {
            GENERAL: {
                OR: 'Or',
                SUBMIT_BUTTON: 'Submit',
                NO_ACCOUNT: 'Don\'t have an account?',
                SIGNUP_BUTTON: 'Signup',
                FORGOT_BUTTON: 'Forgot Password',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Login Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered. Please use your registered account to login.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect'
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'BONjour',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};
