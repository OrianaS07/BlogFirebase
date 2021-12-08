import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostI } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  image: any;
  form: FormGroup = new FormGroup({});
  private imageOriginal: any;
  typeForm: string = '';

  @Input() post !: PostI;

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.formBuild();
    if(this.post){
      this.typeForm = 'edit';
      this.initValuesForm();
    }else{
      this.typeForm = 'new';
    }
  }

  private formBuild(): void{
    this.form = new FormGroup({
      title: new FormControl('',[
        Validators.required
      ]),
      content: new FormControl('',[
        Validators.required
      ]),
      tags: new FormControl('',[
        Validators.required
      ]),
      image: new FormControl('',[
        Validators.required
      ])
    })
  }

  public addNewPost(){
    this.postSvc.preAddUploadPost(this.form.value, this.image);
  }

  public editPost(post: PostI){
    post.id = this.post.id;
    if(this.image === this.imageOriginal){
      post.image = this.imageOriginal;
      this.postSvc.editPostById(post);
    }else{
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any){
    this.image = event.target.files[0];
  }

  private initValuesForm(): void{
    this.form.patchValue({
      id: this.post.id,
      title: this.post.title,
      content: this.post.content,
      tags: this.post.tags
    });
    this.imageOriginal = this.post.image;
    this.image = this.post.image;
  }

}
