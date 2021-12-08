import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PostI } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/modules/posts/services/post.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title', 'tags','actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private postSvc: PostService,
              public dialog: MatDialog) {
    this.postSvc.getAllPosts$().subscribe(
      res =>{
        this.dataSource.data = res;
      }
    );
  }

  ngOnInit(){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNewPost(){
    this.openDialog()
  }

  onDeletePost(post: PostI){
    Swal.fire({
      title: 'Are you sure?',
      text: `You won´t be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:  '#D19163',
      cancelButtonColor: '#FF6363',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value){
        this.postSvc.deletePostById(post).then(() => {
          Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
        }).catch(()=>{
          Swal.fire('Error!', 'There was an error deleting this post', 'error');
        });
      }
    })
  }

  onEditPost(post: PostI){
    console.log('edit',post);
    this.openDialog(post);
  }

  openDialog(post?:PostI):void{
    const config = {
      data:{
        message: post ? 'Edit Post' : 'New Post',
        content: post
      }
    };
    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(
      resp =>{
        console.log(`Dialog result ${resp}`)
      }
    )
  }
}


