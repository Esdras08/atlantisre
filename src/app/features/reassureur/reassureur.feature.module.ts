import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {ReassureurFeatureComponent} from './reassureur/reassureur.feature.component';
import {ReassureurModalFeatureComponent} from './reassureur-modal/reassureur-modal.feature.component';
import {PaysFormModule} from '../../forms/pays/pays.form.module';

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
        PaysFormModule
    ],
    declarations: [
        ReassureurFeatureComponent, ReassureurModalFeatureComponent
    ],
    exports: [
        ReassureurFeatureComponent, ReassureurModalFeatureComponent
    ],
    entryComponents: [
        ReassureurModalFeatureComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class ReassureurFeatureModule {}
