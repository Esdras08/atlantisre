import {NgModule} from '@angular/core';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {TypepersonneComboComponent} from './typepersonne.combo.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClvAngularBootModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [TypepersonneComboComponent],
    exports: [TypepersonneComboComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}
    ]
})
export class TypepersonneFormModule {
}
