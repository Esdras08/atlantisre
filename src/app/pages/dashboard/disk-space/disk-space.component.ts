import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpRequestSender, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {Security} from '../../../core/utilities/security.utilities';

@Component({
  selector: 'app-disk-space',
  templateUrl: './disk-space.component.html'
})
export class DiskSpaceComponent implements OnInit {
  public data: any[] = [];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B']
  };
  public showLabels = true;
  public explodeSlices = true;
  public doughnut = false;
  @ViewChild('resizedDiv') resizedDiv: ElementRef;
  public previousWidthOfResizedDiv = 0;

  constructor(private httpClient: HttpClient) {
      const request: HttpRequestSender<any, any> = new HttpRequestSender<any, any>(this.httpClient);
      request.getRequest().setUrl(WebServicesUtilities.getSimpleUrl('SgiCtrl', 'GetRepartitionPortefeuille'))
          .setData({
              ItemToSearch: {
                  DateSeance: '2018-09-20T00:00:00',
                  NumeroCompte: Security.getCurrentUser()['NumeroCompte']
              }
          }).setMethod(RequestMethod.POST);
      request.sendRequest().subscribe(response => {
          response.body.Items.map((item, index) => {
              this.data.push({name: item.Libelle, value: item.Valeur});
          });
      });
  }

  ngOnInit() {
  }

  public onSelect(event) {
    console.log(event);
  }

  ngAfterViewChecked() {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      setTimeout(() => {
        const dat = this.data;
        this.data = [...dat];
      }, 5000 );
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

}
