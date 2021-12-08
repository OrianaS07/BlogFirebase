import { PostService } from './../../../posts/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostI } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public posts!:PostI[];
  loading: boolean = false;

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.postSvc.getAllPosts$().subscribe(
      response =>{
        this.posts = response;
        this.loading = true;
      }
    );
  }

}
