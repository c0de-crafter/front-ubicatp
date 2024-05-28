import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserProfileComponent implements OnInit {
  userProfile: any = {
    name: '',
    email: '',
    bio: '',
    avatarUrl: 'https://via.placeholder.com/150'
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  onSubmit(): void {
    console.log('Perfil actualizado', this.userProfile);
  }
}
