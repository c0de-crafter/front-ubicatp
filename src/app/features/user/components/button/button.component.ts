import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: any = {
    name: '',
    email: '',
    bio: '',
    avatarUrl: 'https://via.placeholder.com/150' // URL por defecto
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  onSubmit(): void {
    // Aquí puedes implementar la lógica para guardar los cambios
    console.log('Perfil actualizado', this.userProfile);
  }
}
