import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {

  constructor(private api: ApiService) { }

  public GetUsers() {
    return this.api
    .Get('http://5be5a16c48c1280013fc3da5.mockapi.io/api/Users')
    .pipe(
      map(result => {
        return result as Array<User>;
      })
    );
  }
}
