import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoverAddClassDirective} from './directives/hover-add-class.directive';
import {BooleanToStringPipe} from './pipes/boolean-to-string.pipe';
import {DecimalFormatPipe} from 'clv-angular-pipes-utilities';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HoverAddClassDirective, BooleanToStringPipe, DecimalFormatPipe
    ],
    exports: [
        HoverAddClassDirective, BooleanToStringPipe, DecimalFormatPipe
    ],
})
export class CoreModule {
}
