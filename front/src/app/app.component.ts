import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'The-final-countdown';
  dateMort: string | null = null;

  ngOnInit() {
    this.dateMort = localStorage.getItem('date_mort');
  }
}
