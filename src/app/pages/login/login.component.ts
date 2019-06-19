import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, Validators} from '@angular/forms';
import {AppSettings} from '../../app.settings';
import * as ObjectPath from 'object-path';
import {Settings} from '../../app.settings.model';
import {SgiForm} from '../../core/behaviors/sgi-form';
import {
    MessageImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    MessageType,
    ModelImpl,
    ModelMaskFieldImpl,
    ModelMaskFieldType,
    PromptActionImpl,
    PromptActionType,
    Request,
    RequestMethod
} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {CommonUtilities} from '../../core/utilities/common.utilities';
import {Security} from '../../core/utilities/security.utilities';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent extends SgiForm {
    public form: FormGroup;
    public settings: Settings;

    constructor(public appSettings: AppSettings, public router: Router,
                public httpClient: HttpClient, public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakeMessage: MessageShowerSnakeBarImpl) {
        super(httpClient, toast, alertMessage, snakeMessage);
        this.settings = this.appSettings.settings;
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.router.navigate(['/']);
        }
    }

    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }

    public formToDataSending(formValue: any, formInfo: any): any {
        // return Object.assign(formInfo.Items[0], formValue);
        this.setFormData(formValue);
        return formValue;
    }

    public afterError(status: number): void {
        this.alertMessage.clearActions().addAction(new PromptActionImpl().setKey(1)
            .setTitle('Fermer').setType(PromptActionType.PRIORITY_HIGHT));
        this.alertMessage.setMessage(new MessageImpl().setMessage('Verifiez vos identifiants de connexion ou votre connexion internet')
            .setTitle('Erreur').setType(MessageType.ERROR));
        this.alertMessage.show();
    }

    public afterSuccess(status: number): void {
        this.toast.getMessage().setType(MessageType.SUCCESS).setMessage('Connexion effectuée avec succès').setTitle('Connecté');
        this.toast.show();
    }

    beforeAll(): void {
        const model: ModelImpl = new ModelImpl();
        model.getMask()
            .addField(new ModelMaskFieldImpl().setName('Login').addValidator(Validators.required))
            .addField(new ModelMaskFieldImpl().setName('Password').addValidator(Validators.required))
            .addField(new ModelMaskFieldImpl().setName('rememberMe').setType(ModelMaskFieldType.BOOLEAN).setDefaultValue(false));
        this.setModel(model);
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl('Security', 'AuthentifyUser'))
            .setMethod(RequestMethod.POST);
    }

    public afterSendingForm(result: any): void {
        super.afterSendingForm(result);
        // Security.setCurrentUser(result.body.Items[0]);
        Security.setIdUtilisateur(result.body.Items[0]);
        Security.setUser(result.body.Items[0]);
        this.router.navigate(['/']);
    }

    public beforeSending(request: Request<any>): void {
        ObjectPath.set(request.getData(), 'Password', CommonUtilities.encodePassword(request.getData()['Password']));
        request.setData({
            ItemToSearch: request.getData()
        });
    }
}
