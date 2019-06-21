import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {EncaissementFeatureComponent} from './encaissement/encaissement.feature.component';
import {EncaissementModalFeatureComponent} from './encaissement-modal/encaissement-modal.feature.component';
import {StatutAffaireFormModule} from '../../forms/statut-affaire/statut-affaire.form.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ClvAdvancedTableModule,
        ClvAngularPipesUtilitiesModule,
        LoadingBarHttpClientModule,
        StatutAffaireFormModule,
    ],
    declarations: [
        EncaissementFeatureComponent, EncaissementModalFeatureComponent
    ],
    exports: [
        EncaissementFeatureComponent, EncaissementModalFeatureComponent
    ],
    entryComponents: [
        EncaissementModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class EncaissementFeatureModule {
}
