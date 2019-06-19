import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-parametrage',
    templateUrl: 'parametrage.component.html',
    styleUrls: ['parametrage.component.scss']
})
export class ParametrageComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


