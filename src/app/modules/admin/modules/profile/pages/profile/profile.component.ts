import { FileI } from './../../../../../../core/models/file.interface';
import { UserI } from './../../../../../../core/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileForm = new FormGroup({});
  public image!: FileI;
  public currentImage : string = "https://picsum.photos/536/354";

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.formBuild();
    this.authSvc.userData$.subscribe( user =>{
      this.initValueForm(user);
    });
  }

  private formBuild(): void{
    this.profileForm = new FormGroup({
      displayName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
    });
  }

  initValueForm(user: UserI):void{
    if(user.photoURL){
      this.currentImage = user.photoURL;
    }
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email
    });
  }

  onSaveUser(){
    this.authSvc.preSaveUserProfile(this.profileForm.value, this.image);
  }

  handleImage(event: any):void{
    this.image = event.target.files[0];
  }
}
