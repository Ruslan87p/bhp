import { Post } from './home/list-items/item.interface';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './home/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private API = 'http://localhost:3000';
  subject$ = new Subject();

  constructor(
    private http: HttpClient
  ) { }


  getSelectedUser(userId: number) {
    return this.subject$.next(userId);
  }

  
  getPosts(): Observable<Post> {
    return this.http.get<Post>(`${this.API}/comments`)
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(`${this.API}/users`)
  }

  deletePostById(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.API}/comments/${id}`)
  }

  updatePostById(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.API}/comments/${post.id}`, post)
  }
  
}
