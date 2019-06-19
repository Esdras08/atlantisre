import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-encaissement',
    templateUrl: 'encaissement.component.html',
    styleUrls: ['encaissement.component.scss']
})
export class EncaissementComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


