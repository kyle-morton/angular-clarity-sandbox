import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UserService ]
})
export class UsersComponent implements OnInit {

  users : Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe(result => {
      this.users = result;
    });
  }

}
