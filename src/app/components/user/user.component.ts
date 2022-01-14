import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../services/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() deletedUser = new EventEmitter<User>(null);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editUser() {
    this.router.navigate([`edit-user/${this.user.id}`]);
  }

  deleteUser() {
    // i dergojme parent component user object qe duhet te fshije
    this.deletedUser.emit(this.user);
  }
}
