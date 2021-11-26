import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

  @Input() title: string = '';
  @Input() autor?: string = '';
  @Input() content?: string = '';
  @Input() img: string = '';
  @Input() tags?: string[] = [];
  @Input() date?: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
