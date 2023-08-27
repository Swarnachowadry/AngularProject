import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {

  @Input() userID: string ;

 
  collection: string[];

  constructor() {
    this.collection = ['Swarna', 'Veena', 'Yash'];
    this.userID= '';
  }
}