import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-parametrage-metier',
    templateUrl: 'parametrage-metier.component.html',
    styleUrls: ['parametrage-metier.component.scss']
})
export class ParametrageMetierComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


