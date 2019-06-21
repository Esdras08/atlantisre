import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoverAddClassDirective} from './directives/hover-add-class.directive';
import {BooleanToStringPipe} from './pipes/boolean-to-string.pipe';
import {DecimalFormatPipe} from './pipes/decimal-format.pipe';
import {DecimalFormatDirective} from './directives/decimal-format.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HoverAddClassDirective, BooleanToStringPipe, DecimalFormatPipe, DecimalFormatDirective
    ],
    exports: [
        HoverAddClassDirective, BooleanToStringPipe, DecimalFormatPipe, DecimalFormatDirective
    ],
})
export class CoreModule {
}
