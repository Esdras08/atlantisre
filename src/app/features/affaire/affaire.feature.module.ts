import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {AffaireModalFeatureComponent} from './affaire-modal/affaire-modal.feature.component';
import {AffaireFeatureComponent} from './affaire/affaire.feature.component';
import {AffaireCardFeatureComponent} from './affaire-card/affaire-card.feature.component';
import {BrancheFormModule} from '../../forms/branche/branche.form.module';
import {FilialeFormModule} from '../../forms/filiale/filiale.form.module';
import {StatutAffaireFormModule} from '../../forms/statut-affaire/statut-affaire.form.module';
import {AssureFormModule} from '../../forms/assure/assure.form.module';
import {AffaireListeFeatureComponent} from './affaire-liste/affaire-liste.feature.component';
import {CoreModule} from '../../core/core.module';

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
        FilialeFormModule,
        StatutAffaireFormModule,
        AssureFormModule,
        CoreModule,
    ],
    declarations: [
        AffaireFeatureComponent, AffaireModalFeatureComponent, AffaireCardFeatureComponent, AffaireListeFeatureComponent
    ],
    exports: [
        AffaireFeatureComponent, AffaireModalFeatureComponent, AffaireCardFeatureComponent, AffaireListeFeatureComponent
    ],
    entryComponents: [
        AffaireFeatureComponent, AffaireModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class AffaireFeatureModule {
}
