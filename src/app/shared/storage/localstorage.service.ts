import {Injectable} from '@angular/core';

import {User} from '../model/User';
import {CommentProfile} from '../model/CommentProfile';
import {LocalStorage} from '@cedx/ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  USER_KEY = 'USER_KEY';

  constructor(
    private storage: LocalStorage
  ) {
  }


  createUserLocalProfile(user: User): void {
    this.storage.setObject(this.USER_KEY, user);

  }

  getCommentProfile(): CommentProfile | boolean {
    if (this.userHasProfile()) {
      const user = this.storage.getObject(this.USER_KEY);
      return {
        userId: user.userId,
        screenName: user.screenName
      };
    }
    return false;
  }

  clearUserProfile(): void {
    this.storage.remove(this.USER_KEY);
  }

  userHasProfile(): boolean {
    return this.storage.has(this.USER_KEY);

  }
}
