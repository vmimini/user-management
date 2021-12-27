import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = false;
  users: User[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.loading = true;
    this.backendService.getUsers()
    .subscribe((result: User[]) => {
      this.users = result;
      this.loading = false;
    })
  }

  updateParent(user: User): void {
    this.backendService.deleteUser(user)
    .subscribe((result: User) => {
      this.users = this.users.filter(u => u !== user);
    })
  }

}
