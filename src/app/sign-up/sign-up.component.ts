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
    password: ''
  };

  private apiUrl = 'http://3.208.6.7/Login/employees_signup';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post<any>(this.apiUrl, this.user).subscribe(response => {
      if (response.status === 'successfully signup') {
        this.router.navigate(['/login']);  
      } else {
        alert(response.status);
      } 
    });
  }
}