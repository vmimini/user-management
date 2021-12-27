import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() userReturnedToParent = new EventEmitter<User>(null);
  constructor(private router: Router) { }

  ngOnInit(): void {}

  editUser(): void {
    this.router.navigate([`edit-user/${this.user.id}`]);
  }

  deleteUser(): void {
    this.userReturnedToParent.emit(this.user);
  }
}
