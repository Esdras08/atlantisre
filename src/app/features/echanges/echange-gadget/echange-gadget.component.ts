import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-echange-gadget',
    templateUrl: './echange-gadget.component.html',
    styles: [`
        .etape {
            font-size: 3rem;
            font-weight: 200;
        }`]
})
export class EchangeGadgetComponent {
    @Output() onList = new EventEmitter<void>();
    @Input('id') id: number;
    constructor() {
    }

}
