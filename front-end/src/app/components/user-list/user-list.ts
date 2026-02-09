import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmService } from '../../services/crm.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserListComponent implements OnInit, OnDestroy { // <--- Class Starts
  leads: any[] = [];
  intervalId: any;
  showForm: boolean = false;
// 3. New Lead object for the "Add Contact" form
  newLead = {
    name: '',
    email: '',
    phone: '',
    role:''
  };
  constructor(
    private crmService: CrmService, 
    private cdr: ChangeDetectorRef // Added for manual UI refresh
  ) { }
  // ADD THIS METHOD: It links to your "+ Add New contact" button
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // FIX: This method must exist inside the class
  ngOnInit(): void {
    console.log('UserListComponent initialized');
    this.loadLeads();
    this.intervalId = setInterval(() => {
      this.loadLeads();
    }, 5000);
  }

  loadLeads() {
     // 1. Always load local leads first
  const localLeads = JSON.parse(localStorage.getItem('localLeads') || '[]');
  this.leads = localLeads;

  // 3. Try API (but don't block UI)
  this.crmService.getLeads().subscribe({
    next: (data: any) => {
      const apiLeads = data?.data ?? data ?? [];

      const merged = new Map<string, any>();

      apiLeads.forEach((l: any) => l.email && merged.set(l.email, l));
      localLeads.forEach((l: any) => l.email && merged.set(l.email, l));

      this.leads = Array.from(merged.values());
       this.cdr.detectChanges();
    },
    error: () => {
      // API failed (500) → keep local leads
      console.warn('API failed, showing local leads only');
    }
  });
  }
  // 4. Method to manually add a contact to the table
  addContact() {
  if (!this.newLead.name || !this.newLead.email || !this.newLead.phone || !this.newLead.role) {
    alert('Please fill out all fields');
    return;
  }

  const localLeads = JSON.parse(localStorage.getItem('localLeads') || '[]');
  localLeads.unshift({ ...this.newLead });

  localStorage.setItem('localLeads', JSON.stringify(localLeads));

  // Show immediately (no API needed)
  this.leads = localLeads;

  this.newLead = { name: '', email: '', phone: '', role: '' };
  this.showForm = false;
     this.cdr.detectChanges();
  }

  // FIX: This method must also exist because you 'implements OnDestroy'
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

trackByEmail(index: number, lead: any) {
  return lead.email ?? index;
}


  
} // <--- Class Ends