import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'The-final-countdown';
  dateMort: string | null = null;
  today: string;

  constructor() {
    this.today = this.formatDate(new Date());
    console.log(this.today);
  }

  ngOnInit() {

    this.dateMort = localStorage.getItem('date_mort');
    this.showModal();
  }

  showModal(): void {
    const modal = document.getElementById('warningModal');
    const span = document.getElementById('closeModal');

    if (modal && span) {
      modal.style.display = 'block';

      span.onclick = function() {
        modal.style.display = 'none';
      }

      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      }
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padTo2Digits(date.getMonth() + 1);
    const day = this.padTo2Digits(date.getDate());
    const hours = this.padTo2Digits(date.getHours());
    const minutes = this.padTo2Digits(date.getMinutes());
    const seconds = this.padTo2Digits(date.getSeconds());

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
