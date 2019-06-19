import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Security} from '../../../core/utilities/security.utilities';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = 'assets/img/users/user.jpg';
  user: any;
  constructor(public  router: Router) { }

  ngOnInit() {
    this.user = Security.getCurrentUser();
  }

  logout(): void {
    Security.setCurrentUser(null);
    Security.setIdUtilisateur(null);
    Security.setUser(null);
    this.router.navigate(['/login']);
  }

}
