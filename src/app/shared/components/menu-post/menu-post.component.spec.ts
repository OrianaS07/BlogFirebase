import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPostComponent } from './menu-post.component';

describe('MenuPostComponent', () => {
  let component: MenuPostComponent;
  let fixture: ComponentFixture<MenuPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
