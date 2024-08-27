import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  private apiUrl = 'http://3.208.6.7/User/userSignup';
 
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {

    if (!this.user.email || !this.user.password) {
      alert('Please fill in all required details.');
      return; 
    }
    
    this.http.post<{ status: string, message: string }>(this.apiUrl, this.user).subscribe(
      response => {
        if (response.status === 'success') {
          alert('user signup successful!');
          this.router.navigate(['/login']);
        } else if (response.status === 'failure') {
          alert(response.message);
        } else {
          alert('Signup failed. Please try again.');
        }
      },
      error => {
        alert('An error occurred during signup. Please try again later.');
        console.error('Signup error:', error);
      }
    );
  }
}