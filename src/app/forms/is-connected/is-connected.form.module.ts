import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {IsConnectedComboComponent} from './is-connected.combo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClvAngularBootModule,
        SharedModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}
    ],
    declarations: [IsConnectedComboComponent],
    exports: [IsConnectedComboComponent]
})
export class IsConnectedFormModule {
}
