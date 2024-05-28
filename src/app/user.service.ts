import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUserProfile(): Observable<any> {
    const userProfile = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Software Developer at XYZ',
      avatarUrl: 'https://via.placeholder.com/150'
    };
    return of(userProfile);
  }
}
