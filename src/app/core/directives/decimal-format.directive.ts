import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[app-decimal-format]',
})
export class DecimalFormatDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.onKeyUp();
    }

    @HostListener('keyup') onKeyUp() {
        this.el.nativeElement.value = this.clean(this.el.nativeElement.value);
        this.el.nativeElement.value = this.formater(this.el.nativeElement.value);
    }

    formater (value) {
        let result: string;
        let i = -3;
        let j = 0;
        let end = false;
        let cp = 0;
        result = '';
        while (!end) {
            if (j < value.length) {
                i += 3;
                j += 3;
                result = ' ' + value.substring(value.length - j, value.length - i) + result;
            } else {
                i += 3;
                result = ' ' + value.substring(0, value.length - i) + result;
                end = true;

            }
            cp++;
        }
        return result;
    }
    cloner (value) {
        return JSON.parse(JSON.stringify(value));
    }
    clean(value) {
        return `${value}`.replace(/\s/g, '');
    }

}
