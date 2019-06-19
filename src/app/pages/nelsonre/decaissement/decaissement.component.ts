import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-decaissement',
        templateUrl: 'decaissement.component.html',
    styleUrls: ['decaissement.component.scss']
})
export class DecaissementComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


