import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-sinistre',
    templateUrl: 'sinistre.component.html',
    styleUrls: ['sinistre.component.scss']
})
export class SinistreComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


