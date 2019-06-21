import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-overlay-layout',
    template: `<div class="ovl" [ngClass]="{'active': active}">
        <div align="end">
            <button class="close" color="warn"
                    mat-flat-button (click)="active = false;" aria-label="Close">
                <span aria-hidden="true" matTooltip="Fermer" matTooltipPosition="left">&times;</span>
            </button>
        </div>
        <ng-content></ng-content></div>`,
    styles: [`
        /*.close {*/
        /*    position: absolute;*/
        /*}*/
        .ovl {
            position: fixed;
            z-index: 100;
            background: #f1f1f1;
            left: 0;
            right: 0;
            bottom: 0;
            top: 100%;
            overflow-y: scroll;
            transition: .5s all ease;
        }
        .ovl.active {
            top: 51px;
         }
    `]
})
export class OverlayLayoutComponent {
    @Input('active') active = false;
}
