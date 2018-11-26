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
  public total = 100;
  private page = 1;
  private count = 10;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    //get initial list of 10 users
    // this.userService.GetUsers(this.page, this.count)
    // .subscribe(result => {
    //   this.users = result;
    //   this.loading = false;
    // });

  }

  refresh(state: ClrDatagridStateInterface) {

    if (!state.page)
      return;

    //calculate page to load from API
    this.page = (state.page.from/10) + 1;
    this.loading = true;

    this.userService.GetUsers(this.page, this.count)
    .subscribe(result => {
      this.users = result;
      this.loading = false;
    });
}

}
