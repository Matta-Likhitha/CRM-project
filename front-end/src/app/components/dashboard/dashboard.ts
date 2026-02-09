import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,CommonModule,BaseChartDirective,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

leads: any;
addContact() {
throw new Error('Method not implemented.');
}
newLead: any;
toggleForm() {
throw new Error('Method not implemented.');
}
showForm: any;
   constructor(private router:Router){}
Contacts(){
    this.router.navigate(['/contact']);
}
profile(){
  this.router.navigate(['/profile']);
}
settings(){
  this.router.navigate(['/settings']);
}
onLogout(){
  this.router.navigate(['/login']);
}
  // 1. Deal Stages (Doughnut Chart)
  public doughnutChartLabels: string[] = ['Won', 'Negotiation', 'Proposal'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 200], 
        backgroundColor: ['#b19cd9', '#4e73df', '#42d3c1'],
        hoverBackgroundColor: ['#9a82c4', '#3b5998', '#36bba8'],
        borderWidth: 0
      }
    ]
  };
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false } // We use custom HTML legend
    },
    cutout: '70%'
  };

  // 2. Sales Activities by Rep (Stacked Bar Chart)
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, grid: { color: '#f0f0f0' } }
    },
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 12 } }
    }
  };
  public barChartData: ChartData<'bar'> = {
    labels: ['Rep 1', 'Rep 2', 'Rep 3', 'Rep 4', 'Rep 5', 'Rep 6'],
    datasets: [
      { data: [12, 19, 3, 5, 2, 3], label: 'Won', backgroundColor: '#b19cd9' },
      { data: [2, 3, 20, 5, 1, 4], label: 'Negotiation', backgroundColor: '#4e73df' },
      { data: [3, 10, 13, 15, 22, 10], label: 'Proposal', backgroundColor: '#42d3c1' }
    ]
  };
   // 3. Ensure this method exists
  onSearch(query: string) {
    if (!query) return;
    console.log("Searching for:", query);
       alert("Searching for: " + query);
    }
  }

  

