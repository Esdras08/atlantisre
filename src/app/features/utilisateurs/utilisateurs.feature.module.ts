import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {UtilisateursFeatureComponent} from './utilisateurs/utilisateurs.feature.component';
import {UtilisateursModalFeatureComponent} from './utilisateurs-modal/utilisateurs-modal.feature.component';
import {ProfilFormModule} from '../../forms/profil/profil.form.module';
import {StructureFormModule} from '../../forms/structure/structure.form.module';
import {IsConnectedFormModule} from '../../forms/is-connected/is-connected.form.module';
import {ActifFormModule} from '../../forms/actif/actif.form.module';

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
        ProfilFormModule,
        StructureFormModule,
        IsConnectedFormModule,
        ActifFormModule
    ],
    declarations: [
        UtilisateursFeatureComponent, UtilisateursModalFeatureComponent
    ],
    exports: [
        UtilisateursFeatureComponent, UtilisateursModalFeatureComponent
    ],
    entryComponents: [
        UtilisateursModalFeatureComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class UtilisateursFeatureModule {}
