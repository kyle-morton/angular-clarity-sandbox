import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/user.service';
import { User } from 'src/app/models/user';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UserService ]
})
export class UsersComponent implements OnInit {

  public users : Array<User>;
  public loading = true;
  private page = 1;
  private count = 10;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    //get initial list of 10 users
    // this.userService.GetUsers(this.page, this.count)
    this.userService.GetUsers()
    .subscribe(result => {
      this.users = result;
      this.loading = false;
    });

  }

  // refresh(state: ClrDatagridStateInterface) {

  //   let from = state.page.from;
  //   let size = state.page.size;

  //   this.loading = true;

  //   this.userService.GetUsers(this.page, this.count)
  //   .subscribe(result => {
  //     this.users = result;
  //     this.loading = false;
  //   });
}

}
