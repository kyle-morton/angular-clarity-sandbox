import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {

  private apiUrl = 'http://5be5a16c48c1280013fc3da5.mockapi.io/api/Users';

  constructor(private api: ApiService) { }

  public GetUsers(page = 0, limit = 0) {

    let url = this.apiUrl;
    if (page > 0 && limit > 0)
      url += `?page=${page}&limit=${limit}`;

    return this.api
    .Get(url)
    .pipe(
      map(result => {
        return result as Array<User>;
      })
    );
  }
}
