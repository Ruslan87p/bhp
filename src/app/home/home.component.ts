import { SharedService } from './../shared.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private sharedSvc: SharedService
  ) { }

  selectedUser!: number;
  users$!: Observable<any>;

  onChange(id: any) {
    this.sharedSvc.getSelectedUser(id)
  }
  
  ngOnInit(): void {
    this.users$ = this.sharedSvc.getUsers();
  }

}
