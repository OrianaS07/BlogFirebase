import { AuthService } from './../../services/auth.service';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formlogin: FormGroup = new FormGroup({});

  constructor(private authSvc: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.formBuild();
  }

  private formBuild(): void{
    this.formlogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );
  }

  onLogin(){
    console.log(this.formlogin.value);
    this.authSvc.loginByEmail(this.formlogin.value).then(res =>{
        this.route.navigate(['/']);
      }).catch(err => {
        console.log(err);
      });
  }


}
