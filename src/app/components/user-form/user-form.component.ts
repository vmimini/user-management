import { Component, OnInit } from '@angular/core';
import { User } from '../../services/models';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    // lexojme id e user-it nga parametri i path-it
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      // nese kemi id ne path (edit-user/:id) jemi duke bere update
      this.backendService.getUser(id).subscribe(user => this.user = user);
    } else {
      // nese nuk kemi id ne path (add-user) jemi duke shtuar nje user te ri
      this.user = {
        address: null,
        company: null,
        email: '',
        id: null,
        name: '',
        phone: '',
        username: '',
        website: ''
      };
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  save(): void {
    // Saves the data and redirects to the previous view
    if (this.user.id) {
      // update user
      this.backendService.updateUser(this.user)
        .subscribe(() => this.goBack());
    } else {
      // add new user
      this.backendService.addUser(this.user).subscribe(() => {
        console.log('user added');
        this.goBack();
      });
    }
  }
}
