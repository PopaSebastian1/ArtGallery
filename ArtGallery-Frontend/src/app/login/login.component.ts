// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../user-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  User:User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private userService: DataService
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.User = { name: '', password: '', role: 0, id: 0 }; // Inițializare User
  }
  loginUser(name: string, password: string) {
    return this.http.post<User>(
      'https://localhost:7217/User/login',
      { name, password }
    );
  }
  onLogin(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const name = this.loginForm.value.name;
      const password = this.loginForm.value.password;
      if (name && password) {
        this.loginUser(name, password).subscribe((response) => {
          if (response !== null) {
            this.router.navigate(['/home']);
            this.User.name = response.name;
            this.User.password = response.password;
            this.User.id = response.id;
            this.User.role=response.role;
            this.userService.setUserData(this.User);
            console.log(this.userService.getUserData());
          } else {
            console.log('Login failed'); // Add this line
            window.alert(
              'Login failed. Please check your username and password.'
            );
          }
        });
      }
      console.log(this.loginForm.value);
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
