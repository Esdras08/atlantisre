import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {MatDialogModule} from '@angular/material';
import {AdministrationComponent} from './administration.component';
import {UtilisateursFeatureModule} from '../../../features/utilisateurs/utilisateurs.feature.module';
import {ProfilFeatureModule} from '../../../features/profil/profil.feature.module';
import {PersonneFeatureModule} from '../../../features/personne/personne.feature.module';
import {FonctionnaliteFeatureModule} from '../../../features/fonctionnalite/fonctionnalite.feature.module';
import {UtilisateurFonctionnaliteFeatureModule} from '../../../features/utilisateur-fonctionnalite/utilisateur-fonctionnalite.feature.module';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: AdministrationComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ClvAdvancedTableModule,
        MatDialogModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        UtilisateursFeatureModule,
        ProfilFeatureModule,
        PersonneFeatureModule,
        FonctionnaliteFeatureModule,
        UtilisateurFonctionnaliteFeatureModule
    ],
    exports: [],
    declarations: [
        AdministrationComponent,
    ],
    entryComponents: [],
})
export class AdministrationModule {
}
