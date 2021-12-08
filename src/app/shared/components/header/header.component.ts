import { AuthService } from './../../../modules/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authSvc.logout();
  }

}
