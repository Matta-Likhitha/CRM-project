import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  standalone: true,
  // These must be valid Standalone Components or NgModules
  imports: [RouterOutlet], 
  template: `
  <div>
    <div style="padding: 20px;">
     
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.css'
})
export class AppComponent { }

// DELETE the "export class LoginComponent { }" line from this file!
// It belongs in src/app/components/login/login.ts