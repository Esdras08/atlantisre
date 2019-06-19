import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {TraiteFeatureComponent} from './traite/traite.feature.component';
import {TraiteModalFeatureComponent} from './traite-modal/traite-modal.feature.component';
import {BrancheFormModule} from '../../forms/branche/branche.form.module';
import {ReassureurFormModule} from '../../forms/reassureur/reassureur.form.module';
import {StructureFormModule} from '../../forms/structure/structure.form.module';

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
        BrancheFormModule,
        ReassureurFormModule,
        StructureFormModule
    ],
    declarations: [
        TraiteFeatureComponent, TraiteModalFeatureComponent
    ],
    exports: [
        TraiteFeatureComponent, TraiteModalFeatureComponent
    ],
    entryComponents: [
        TraiteModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class TraiteFeatureModule {
}
