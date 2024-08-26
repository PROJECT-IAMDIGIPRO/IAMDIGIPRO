import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

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
    
    this.http.post<{ status: string }>(url, {}).subscribe(
      (res: any) => {
        if (res.status === 'Successfully Logged In') {
          alert("Successfully Login");
          console.log('Response:', res);
        } else if (res.status === 'Invalid email or password') {
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