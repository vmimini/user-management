import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,
    private backendService: BackendService) { 

    const userId = +this.activedRoute.snapshot.paramMap.get('id');
    console.log(userId);

    this.backendService.getUser(userId)
    .subscribe((result: User) => {
      console.log(result);
    })
  }

  ngOnInit(): void {}

}
