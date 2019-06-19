import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';

@Component({
    selector: 'app-sgi-accordion',
    template: `
        <mat-accordion>
            <mat-expansion-panel #panel (opened)="onOpened?.emit(); isOpened = true"
                                 (closed)="onClosed?.emit(); isOpened = false"
                                 [ngClass]="panelClass">
                <mat-expansion-panel-header [ngClass]="{'clv-bg-secondary': isOpened, 'clv-bg-primary-light': !isOpened}">
                    <mat-panel-title class="text-uppercase mat-panel-title">
                        <h3 [ngClass]="{'clv-bg-secondary': isOpened, 'clv-bg-primary-light': !isOpened}">{{title}}</h3>
                    </mat-panel-title>
                    <mat-panel-description *ngIf="hasDescription" class="text-uppercase"
                                           [ngClass]="{'clv-bg-secondary': isOpened}">
                        {{isOpened ? clickForReduce : clickForOpen}}
                    </mat-panel-description>
                </mat-expansion-panel-header>
                <ng-template matExpansionPanelContent>
                    <ng-content *ngIf="isOpened"></ng-content>
                </ng-template>
            </mat-expansion-panel>
        </mat-accordion>
    `,
    styles: [`
        .mat-panel-title {
            font-size: 1rem !important;
        }
    `]
})
export class SgiAccordionComponent implements OnInit {
    clickForReduce: string;
    clickForOpen: string;
    @Input('title') title: string;
    @Input('panelClass') panelClass: string;
    @Input('isOpened') isOpened: boolean;
    @Input('hasDescription') hasDescription = true;
    @Output() onOpened = new EventEmitter<void>(null);
    @Output() onClosed = new EventEmitter<void>(null);
    @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;

    constructor() {
        this.clickForOpen = '(Cliqure pour dérouler)';
        this.clickForReduce = '(Cliqure pour réduire)';
    }

    ngOnInit(): void {
        if (this.isOpened) {
            this.panel.open();
        }
    }
}
