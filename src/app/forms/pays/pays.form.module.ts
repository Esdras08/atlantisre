import {NgModule} from '@angular/core';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {PaysComboComponent} from './pays.combo.component';
import {PaysAutocompleteComponent} from './pays.autocomplete.component';
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
    declarations: [PaysComboComponent, PaysAutocompleteComponent],
    exports: [PaysComboComponent, PaysAutocompleteComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}
    ]
})
export class PaysFormModule {
}
