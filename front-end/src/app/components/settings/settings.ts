import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  imports: [RouterLink],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class SettingsComponent{
constructor(private router:Router){}

onLogout(){
  this.router.navigate(['/login']);
}
}
