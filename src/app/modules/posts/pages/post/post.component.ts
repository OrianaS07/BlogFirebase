import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
   posts:{
    id: string;
    image: string;
    content: string;
    title: string;
  } = {
    id: '1',
    image: 'https://picsum.photos/id/237/200/300',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: 'Post One'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts.id = this.route.snapshot.params.id;
  }

}
