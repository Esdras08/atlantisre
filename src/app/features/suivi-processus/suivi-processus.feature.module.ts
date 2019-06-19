import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {EtapeProcessusFormModule} from '../../forms/etape-processus/etape-processus.form.module';
import {SuiviProcessusModalFeatureComponent} from './suivi-processus-modal/suivi-processus-modal.feature.component';
import {SuiviProcessusFeatureComponent} from './suivi-processus/suivi-processus.feature.component';
import {TypeEchangeFormModule} from '../../forms/type-echange/type-echange.form.module';

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
        EtapeProcessusFormModule,
        TypeEchangeFormModule,
    ],
    declarations: [
        SuiviProcessusFeatureComponent, SuiviProcessusModalFeatureComponent
    ],
    exports: [
        SuiviProcessusFeatureComponent, SuiviProcessusModalFeatureComponent
    ],
    entryComponents: [
        SuiviProcessusModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class SuiviProcessusFeatureModule {
}
