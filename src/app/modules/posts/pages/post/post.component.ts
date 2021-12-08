import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostI } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post !: PostI | undefined;
  loading : boolean = false;

  constructor(private route: ActivatedRoute,
              private postSvc: PostService) { }

  ngOnInit(): void {
    this.postSvc.getOnePost(this.route.snapshot.params.id)
      .subscribe(
        resp =>{
          this.post = resp;
          this.loading = true;
        }
      );
  }

}
