import {NgModule} from '@angular/core';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {UtilisateurProfilComboComponent} from './utilisateur-profil.combo.component';
import {UtilisateurProfilAutocompleteComponent} from './utilisateur-profil.autocomplete.component';
import {ClvAdvancedTableModule} from 'clv-advanced-table';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClvAngularBootModule,
        HttpClientModule,
        ClvAdvancedTableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [UtilisateurProfilComboComponent, UtilisateurProfilAutocompleteComponent],
    exports: [UtilisateurProfilComboComponent, UtilisateurProfilAutocompleteComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}
    ]
})
export class UtilisateurProfilFormModule {
}
