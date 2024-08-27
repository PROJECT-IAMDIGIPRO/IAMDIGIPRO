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
    const url = 'http://3.208.6.7/User/userLogin';
    if (!this.loginObj.email || !this.loginObj.password) {
      alert('Please fill in all required details.');
      return; 
    }
    this.http.post<{ status: string, message: string }>(url, this.loginObj).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          alert("user login successfully");
          console.log('Response:', res);
        } else if (res.status === 'failure' && res.message === 'Invalid email or password') {
          this.handleError('Invalid email or password.');
        } else {
          this.handleError('Login failed. Please check your credentials.');
        }
      },
      (error) => {
        this.handleError('An unexpected error occurred.');
        console.error('Error:', error);
      }
    );
  }

  private handleError(message: string) {
    this.errorMessage = message;
    alert(this.errorMessage);
  }
}

export class Login {
  email: string = '';
  password: string = '';
}