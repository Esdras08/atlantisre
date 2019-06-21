import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {ProcessusModalFeatureComponent} from './processus-modal/processus-modal.feature.component';
import {ProcessusFeatureComponent} from './processus/processus.feature.component';
import {ProcessusCardFeatureComponent} from './processus-card/processus-card.feature.component';
import {AffaireFormModule} from '../../forms/affaire/affaire.form.module';
import {TypeProcessusFormModule} from '../../forms/type-processus/type-processus.form.module';
import {CategorieProcessusFormModule} from '../../forms/categorie-processus/categorie-processus.form.module';

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
        AffaireFormModule,
        TypeProcessusFormModule,
        CategorieProcessusFormModule,
    ],
    declarations: [
        ProcessusFeatureComponent, ProcessusModalFeatureComponent, ProcessusCardFeatureComponent
    ],
    exports: [
        ProcessusFeatureComponent, ProcessusModalFeatureComponent, ProcessusCardFeatureComponent
    ],
    entryComponents: [
        ProcessusFeatureComponent, ProcessusModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class ProcessusFeatureModule {
}
