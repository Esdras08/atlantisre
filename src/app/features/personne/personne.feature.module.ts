import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {PersonneModalFeatureComponent} from './personne-modal/personne-modal.feature.component';
import {PersonneFeatureComponent} from './personne/personne.feature.component';
import {TypepersonneFormModule} from '../../forms/typepersonne/typepersonne.form.module';
import {CiviliteFormModule} from '../../forms/civilite/civilite.form.module';
import {PieceIdentiteFormModule} from '../../forms/typepieceidentite/pieceIdentite.form.module';
import {PaysFormModule} from '../../forms/pays/pays.form.module';
import {FormeJuridiqueFormModule} from '../../forms/formejuridique/formeJuridique.form.module';
import {FilialeFormModule} from '../../forms/filiale/filiale.form.module';
import {PersonneMoraleModalFeatureComponent} from './personne-modal/personne-morale-modal.feature.component';

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
        TypepersonneFormModule,
        CiviliteFormModule,
        PieceIdentiteFormModule,
        PaysFormModule,
        FormeJuridiqueFormModule,
        FilialeFormModule
    ],
    declarations: [
        PersonneFeatureComponent, PersonneModalFeatureComponent, PersonneMoraleModalFeatureComponent
    ],
    exports: [
        PersonneFeatureComponent, PersonneModalFeatureComponent, PersonneMoraleModalFeatureComponent
    ],
    entryComponents: [
        PersonneModalFeatureComponent, PersonneMoraleModalFeatureComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class PersonneFeatureModule {}
