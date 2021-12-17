import { Post } from './item.interface';
import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(private sharedSvc: SharedService ) { }

  public users$!: Observable<any>;
  public posts$!: Observable<any>;
  @ViewChild("textarea") textarea!: ElementRef;
  public cmt!: string;
  public newPost!: Post;

  public isDisabled = true;
  public showEditSection = false;
  public selectedPost!: Post;

  deletePost(id: number) {
    this.sharedSvc.deletePostById(id).subscribe( () => {
      this.posts$ = this.sharedSvc.getPosts();
    });
  }

  editPost(post: Post) {
    this.showEditSection = true;
    this.selectedPost = post;
    this.posts$ = this.sharedSvc.getPosts();
  }

  addComment(comment: string) {
    this.cmt = comment;
    this.newPost = {
      ...this.selectedPost,
      txt: comment
    }
    this.sharedSvc.updatePostById(this.newPost).subscribe()
    this.users$ = this.sharedSvc.getUsers();
  }

  // sortDate() {
  //   this.posts.sort((a: string, b: string) => {
  //     return b.createdAt - a.createdAt;
  //   });
  // }

  ngOnInit(): void {
    this.users$ = this.sharedSvc.getUsers();
    this.posts$ = this.sharedSvc.getPosts();
  }

}
