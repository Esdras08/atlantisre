import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {UtilisateurFonctionnaliteFeatureComponent} from './utilisateur-fonctionnalite/utilisateur-fonctionnalite.feature.component';
import {UtilisateurFonctionnaliteModalFeatureComponent} from './utilisateur-fonctionnalite-modal/utilisateur-fonctionnalite-modal.feature.component';
import {CoreModule} from '../../core/core.module';
import {UtilisateurFormModule} from '../../forms/utilisateur/utilisateur.form.module';
import {FonctionnaliteFormModule} from '../../forms/fonctionnalite/fonctionnalite.form.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ClvAdvancedTableModule,
        ClvAngularPipesUtilitiesModule,
        LoadingBarHttpClientModule,
        UtilisateurFormModule,
        FonctionnaliteFormModule
    ],
    declarations: [
        UtilisateurFonctionnaliteFeatureComponent, UtilisateurFonctionnaliteModalFeatureComponent
    ],
    exports: [
        UtilisateurFonctionnaliteFeatureComponent, UtilisateurFonctionnaliteModalFeatureComponent
    ],
    entryComponents: [
        UtilisateurFonctionnaliteModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class UtilisateurFonctionnaliteFeatureModule {
}
