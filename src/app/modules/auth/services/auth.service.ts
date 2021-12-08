import { FileI } from './../../../core/models/file.interface';
import { UserI } from './../../../core/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<any> = new Observable<any>();
  private filePath: string = '';

  constructor(private afAuth: AngularFireAuth,
              private storage: AngularFireStorage) {
    this.userData$ = afAuth.authState;
  }

  loginByEmail(user:UserI){
    const {email, password} = user;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.signOut();
  }

  private async saveUserProfile(userF: UserI){
    (await this.afAuth.currentUser)?.updateProfile({
      displayName: userF.displayName,
      photoURL: userF.photoURL
    }).then(() => {console.log('guardo user')})
      .catch(err => console.log(err));
  }

  preSaveUserProfile(user: UserI, image?: FileI):void{
    if(image){
      this.uploadImage(user, image);
    }else{
      this.saveUserProfile(user);
    }

  }

  private uploadImage(user: UserI, image: FileI): void{
    this.filePath = `images/${image.name}`;
    const fileRef =  this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges().pipe(
      finalize(() =>{
        fileRef.getDownloadURL().subscribe(
          urlImage =>{
            user.photoURL = urlImage;
            this.saveUserProfile(user);
          })
      })
    ).subscribe();
  }
}

//CREAR UN SERVICIO PARA SUBIR IMAGENES
//aplicar alertas
