import {Component} from '@angular/core';

@Component({
    selector: 'app-form-error',
    template: `
        <div class="clv-bg-danger mat-elevation-z2 p-1" id="contain">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `#contain {
            font-size: .8rem;
        }`
    ]
})
export class FormErrorComponent {

}