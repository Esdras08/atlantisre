import {Component} from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div class="re-spinner p-3 clv-bg-white mat-elevation-z8">
            <mat-spinner [diameter]="50"></mat-spinner>
            Patientez S'il Vous Plait...
        </div>
    `,
    styles: [`
        .re-spinner {
            position: fixed;
            z-index: 200000;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 45%;
            left: 45%;
            animation: 5s opacity-comming-going ease infinite;
        }
    `]
})
export class LoadingComponent {
}