import { FileI } from './../../../core/models/file.interface';
import { PostI } from './../../../core/models/post.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postCollection !: AngularFirestoreCollection<PostI>;
  private filePath: any;
  private downloadURL: Observable<string> = new Observable<string>();

  constructor(private firestore: AngularFirestore,
              private storage: AngularFireStorage) {
    this.postCollection = this.firestore.collection<PostI>('post');
  }

  public getAllPosts$(): Observable<PostI[]>{
    return this.postCollection
      .snapshotChanges()
      .pipe(
        map(
          actions => actions.map(
            a =>{
              const data = a.payload.doc.data() as PostI;
              const id = a.payload.doc.id;
              const post = {...data};
              post.id = id;
              return post;
            }
          )
        )
      )
  }

  public getOnePost(id: string) : Observable<PostI | undefined>{
    return this.firestore.doc<PostI>(`post/${id}`).valueChanges();
  }

  public deletePostById(post:PostI){
    return this.postCollection.doc(post.id).delete();
  }

  public editPostById(post: PostI, newImage ?: FileI): any{
    if(newImage){
      this.uploadImage(post, newImage);
    }else{
      return this.postCollection.doc(post.id).update(post);
    }

  }

  public preAddUploadPost(post: PostI, image: FileI):void{
    this.uploadImage(post, image);
  }

  private uploadImage(post: PostI, image: FileI){
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe(
            urlImage =>{
              this.downloadURL = urlImage;
              this.addNewPost(post);
            }
          )
        })
      ).subscribe();
  }

  public addNewPost(post: PostI){
    const postObj = {
      title: post.title,
      content: post.content,
      image: this.downloadURL,
      fileRef: this.filePath,
      tags: post.tags
    };
    if(post.id){
      return this.postCollection.doc(post.id).update(postObj)
    }else{
      return this.postCollection.add(postObj);
    }
  }
}
