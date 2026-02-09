import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
 templateUrl:'./login.html',
  styleUrls: ['./login.css']
})//
export class LoginComponent {
  // These variables hold the data from your input fields
  username = '';
  password = '';
  message = '';
  isError = false;
  constructor(private router:Router){}

  onSubmit() {
    if (this.username === "admin" && this.password === "1234") {
      this.message = "Login successful! Redirecting...";
      this.router.navigate(['/dashboard']);
      this.isError = false;
      console.log("Logged in as:", this.username);
    } else {
      this.message = "Invalid username or password.";
      this.isError = true;
    }
  }
}