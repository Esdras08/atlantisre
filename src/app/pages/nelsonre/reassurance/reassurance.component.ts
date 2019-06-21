import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-reassurance',
    templateUrl: 'reassurance.component.html',
    styleUrls: ['reassurance.component.scss']
})
export class ReassuranceComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


