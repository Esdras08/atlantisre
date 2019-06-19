import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-modal-template',
    template: `<div class="modal-content">
        <div class="modal-header" [ngClass]="modalClass">
            {{title}}
            <button class="close" (click)="onClose?.emit()" aria-label="Close">
                <span aria-hidden="true" matTooltip="Fermer" matTooltipPosition="above" [ngClass]="modalClass">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <ng-content select=".body"></ng-content>
        </div>
        <div class="modal-footer">
            <ng-content select=".footer"></ng-content>
        </div>
    </div>`,
    styles: [`
    .modal-header {
      padding: 15px;
      display: flex;
      justify-content: space-between;
    }
    .modal-footer {
      padding: 10px 15px;
        display: flex;
        width: calc(100% - 30px);
    }
    .modal-body {
      padding: 10px 15px;
        max-height: 400px !important;
        overflow-y: scroll;
    }
    button.close {
      background: transparent;
      border: none;
      text-shadow: 0px 0px 5px;
      cursor: pointer;
    }
  `]
})
export class ModalTemplateComponent {
    @Input('modalClass') modalClass: string;
    @Input('title') title: string;
    @Output() onClose = new EventEmitter<void>(null);
}

