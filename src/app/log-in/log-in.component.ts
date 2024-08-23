import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']  
})
export class LogInComponent {
  loginObj: Login = new Login();
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    const url = `/Login/employees_login/${encodeURIComponent(this.loginObj.email)}/${encodeURIComponent(this.loginObj.password)}`;

    this.http.post(url, {}).subscribe(
      (res: any) => {
        alert("Login Success");
        console.log('Response:', res);
      },
      (error) => {
        if (error.status === 404) {
          this.errorMessage = 'API endpoint not found. Please check the URL.';
        } else if (error.status === 400) {
          if (error.error === 'Invalid email') {
            this.errorMessage = 'Wrong email address.';
          } else if (error.error === 'Incorrect password') {
            this.errorMessage = 'Wrong password.'; 
          } else {
            this.errorMessage = 'Login failed. Please check your credentials.';
          }
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
        alert(this.errorMessage);
        console.error('Error:', error);
      }
    );
  }
}

export class Login {
  email: string = '';
  password: string = '';
}