import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  show: boolean;


  constructor() { }

  ngOnInit() {
  }
  onAppear(){
    this.show=true
  }
  openResume() {
    window.open('./assets/vinayak_CV.pdf', '_blank');
  }

}
