import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuToggle: boolean = false;

  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
  }

  public toggleClick(){
    this.menuToggle = !this.menuToggle;
  }

}
