import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-show-list-button',
    template: `<button mat-raised-button class="clv-bg-brown">
        <mat-icon>remove_red_eye</mat-icon>
        <span> {{title}}</span>
    </button>`
})
export class ShowListButtonComponent {
    @Input('title') title = 'Liste';
}
