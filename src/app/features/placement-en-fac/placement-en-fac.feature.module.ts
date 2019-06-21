import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule , LOCALE_ID} from '@angular/core';
import {PlacementEnFacModalFeatureComponent} from './placement-en-fac-modal/placement-en-fac-modal.feature.component';
import {PlacementEnFacFeatureComponent} from './placement-en-fac/placement-en-fac.feature.component';
import {PlacementEnFacCardFeatureComponent} from './placement-en-fac-card/placement-en-fac-card.feature.component';
import {ProcessusFormModule} from '../../forms/processus/processus.form.module';
import {CoreModule} from '../../core/core.module';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import {MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {OrdonancementPlacementsComponent} from './ordonancement-placements/ordonancement-placements.component';
import {FormulairePlacementComponent} from './formulaire-placement/formulaire-placement.component';
import {PaysFormModule} from '../../forms/pays/pays.form.module';
import {PartOneComponent} from './formulaire-placement/part-one/part-one.component';
import {PartTwoComponent} from './formulaire-placement/part-two/part-two.component';
import {PlacementEnFacListeFeatureComponent} from './placement-en-fac-liste/placement-en-fac-liste.feature.component';
import {EchangeFeatureModule} from '../echanges/echange.feature.module';
import {SchemaPlacementAddComponent} from './schema-placement-add/schema-placement-add.component';
import {ReassureurFormModule} from '../../forms/reassureur/reassureur.form.module';
import {RouterModule} from '@angular/router';
import {routing} from '../../app.routing';

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
        ProcessusFormModule,
        CoreModule,
        MatDatepickerModule, MatInputModule, MatNativeDateModule, PaysFormModule,
        EchangeFeatureModule, ReassureurFormModule
    ],
    declarations: [
        PlacementEnFacFeatureComponent, PlacementEnFacModalFeatureComponent,
        PlacementEnFacCardFeatureComponent, OrdonancementPlacementsComponent,
        FormulairePlacementComponent, PartOneComponent, PartTwoComponent,
        PlacementEnFacListeFeatureComponent, SchemaPlacementAddComponent
    ],
    exports: [
        PlacementEnFacFeatureComponent, PlacementEnFacModalFeatureComponent,
        PlacementEnFacCardFeatureComponent, OrdonancementPlacementsComponent,
        FormulairePlacementComponent, PartOneComponent, PartTwoComponent,
        PlacementEnFacListeFeatureComponent, SchemaPlacementAddComponent
    ],
    entryComponents: [
        PlacementEnFacFeatureComponent, PlacementEnFacModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true},
        { provide: LOCALE_ID, useValue: 'fr-FR'}]
})
export class PlacementEnFacFeatureModule {
}
