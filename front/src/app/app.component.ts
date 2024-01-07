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
    this.showModal();
  }

  showModal(): void {
    const modal = document.getElementById('warningModal');
    const span = document.getElementById('closeModal');

    if (modal && span) {
      modal.style.display = 'block';

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = 'none';
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      }
    }
  }
}
