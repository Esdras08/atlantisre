import {CommonUtilities} from './common.utilities';

export class Security {

    constructor() {
    }

    public static setCurrentUser(user: any) {

        if (!CommonUtilities.IsUndefinedOrNull(user)) {
            user.password = '';
            user.Password = '';
            user.LogPassword = '';
            window.sessionStorage['currentUserStructure'] = JSON.stringify(user);
        } else {
            window.sessionStorage.removeItem('currentUserStructure');
            this.setCurrentGroupUser(null);
            this.setCurrentExercice(null);
            this.setCurrentStructure(null);
        }
    }

    public static setIdUtilisateur(user: any) {

        if (!CommonUtilities.IsUndefinedOrNull(user)) {
            user.password = '';
            user.Password = '';
            user.LogPassword = '';
            window.sessionStorage['idUtilisateur'] = JSON.stringify(user.IdUtilisateur);
        } else {
            window.sessionStorage.removeItem('idUtilisateur');
            this.setCurrentGroupUser(null);
            this.setCurrentExercice(null);
            this.setCurrentStructure(null);
        }
    }

    public static setUser(user: any) {
        const utilisateur: any = {
            Nom: '',
            Email: '',
            Login: '',
            Adresse: '',
            Password: '',
            Prenom: '',
            Telephone: '',
            IdUtilisateur: 0,
            IdProfil: 0,
        };

        if (!CommonUtilities.IsUndefinedOrNull(user)) {
            user.password = '';
            user.Password = '';
            user.LogPassword = '';

            utilisateur.password = user.password;
            utilisateur.Nom = user.Nom;
            utilisateur.Email = user.Email;
            utilisateur.Login = user.Login;
            utilisateur.Adresse = user.Adresse;
            utilisateur.Password = user.Password;
            utilisateur.Prenom = user.Prenom;
            utilisateur.Telephone = user.Telephone;
            utilisateur.IdUtilisateur = user.IdUtilisateur;
            utilisateur.IdProfil = user.IdProfil;
            utilisateur.token = user.token;
            window.sessionStorage['user'] = JSON.stringify(utilisateur);
        } else {
            window.sessionStorage.removeItem('user');
            this.setCurrentGroupUser(null);
            this.setCurrentExercice(null);
            this.setCurrentStructure(null);
        }
    }


    public static getCurrentUser() {

        if (CommonUtilities.IsUndefinedOrNull(window.sessionStorage['currentUserStructure'])) {
            return null;
        }
        const demo = JSON.parse(window.sessionStorage['currentUserStructure']);
        demo.idStructure = 2;
        return JSON.parse(window.sessionStorage['currentUserStructure']);
        // return demo;
    }

    public static getIdUtilisateur() {

        if (CommonUtilities.IsUndefinedOrNull(window.sessionStorage['idUtilisateur'])) {
            return null;
        }
        return JSON.parse(window.sessionStorage['idUtilisateur']);
    }

    public static getUser() {

        if (CommonUtilities.IsUndefinedOrNull(window.sessionStorage['user'])) {
            return null;
        }
        return JSON.parse(window.sessionStorage['user']);
    }

    public static getCurrentUserBearerToken() {

        if (CommonUtilities.IsUndefinedOrNull(window.sessionStorage['currentUserStructure'])) {
            return '';
        }
        // ESDRAS 18062019
        // const Token = Security.getCurrentUser().token;
        const Token = Security.getUser().token;
        return 'Bearer ' + Token.access_token;
        // return demo;
    }


    public static userIsLogin() {

        // ESDRAS 18062019

        // return !CommonUtilities.IsUndefinedOrNull(this.getCurrentUser());
        return !CommonUtilities.IsUndefinedOrNull(this.getUser());
    }

    public static userhasPermission(permission) {
        let returnValue = false;
        if (Security.userIsLogin()) {
            const permissions = Security.getCurrentUser().Permissions;
            permissions.forEach(element => {
                if (element.toLowerCase() === permission.toLowerCase()) {
                    returnValue = true;
                }
            });
        }
        return returnValue;
    }


    public static setCurrentGroupUser(groupUser: any) {

        if (CommonUtilities.IsUndefinedOrNull(groupUser)) {
            window.sessionStorage.removeItem('currentGroupUser');
        } else {
            window.sessionStorage['currentGroupUser'] = JSON.stringify(groupUser);
        }
    }

    public static setCurrentExercice(groupUser: any) {

        if (CommonUtilities.IsUndefinedOrNull(groupUser)) {
            window.sessionStorage.removeItem('currentExercice');
        } else {
            window.sessionStorage['currentExercice'] = JSON.stringify(groupUser);
        }
    }

    public static setCurrentStructure(groupUser: any) {
        groupUser = {IdStructure: '3', Intitule: ''};

        if (CommonUtilities.IsUndefinedOrNull(groupUser)) {
            window.sessionStorage.removeItem('currentStructure');
        } else {
            window.sessionStorage['currentStructure'] = JSON.stringify(groupUser);
        }
    }


}

export function CustomSecurityDecorator(): Function {
    return (target: Function): any => {
        target.prototype.userIsLogin = (param1) => {
            return Security.userIsLogin();
        };


    };
}
