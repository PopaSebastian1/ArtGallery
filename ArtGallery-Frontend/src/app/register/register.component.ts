import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  registerUser(name: string, password: string) {
    return this.http.post(
      'https://localhost:7217/User/register',
      { name, password },
      { responseType: 'text' }
    );
  }

  onRegister(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const name = this.registerForm.value.name;
      const password = this.registerForm.value.password;
      if (name && password) {
        this.registerUser(name, password).subscribe((response) => {
          if (response === 'User added') {
            this.router.navigate(['/login']);
          } else {
            console.log('Registration failed'); // Add this line
            window.alert(
              'Registration failed. Please check your username and password.'
            );
          }
        });
      }
      console.log(this.registerForm.value);
    }
  }
}
