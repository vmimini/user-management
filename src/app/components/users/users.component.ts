import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { User } from '../../services/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = false;
  users: User[] = [];

  // bejme inject servisin
  constructor(private backendService: BackendService,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.backendService.getUsers().subscribe((result: User[]) => {
      this.users = result;
      this.loading = false;
    });
  }

  deleteUser(user: User) {
    this.backendService.deleteUser(user).subscribe(() => {
      this.users = this.users.filter(u => u !== user);
      alert(`User ${user.username} deleted successfully`);
    });
  }

  addItem() {
    this.router.navigate(['add-user']);
  }
}
