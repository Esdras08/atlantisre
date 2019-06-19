import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({name: 'boolToStr'})
export class BooleanToStringPipe implements PipeTransform {
    constructor(public translateService: TranslateService) {
    }
    transform(value: boolean): any {
        return (value) ? this.translateService.instant('APPS.BOOL_TO_STR.YES') : this.translateService.instant('APPS.BOOL_TO_STR.NO');
    }
}
