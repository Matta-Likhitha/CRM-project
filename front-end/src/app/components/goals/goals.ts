import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-goals',
  imports: [RouterLink],
  templateUrl: './goals.html',
  styleUrl: './goals.css',
})
export class GoalsComponent {
   constructor(private router:Router){}
   newLead: any;
   leads: any;

onLogout(){
  this.router.navigate(['/login']);
}
}

