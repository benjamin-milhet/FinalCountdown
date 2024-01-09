import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-survivant',
  templateUrl: './survivant.component.html',
  styleUrls: ['./survivant.component.css']
})
export class SurvivantComponent implements OnInit{
  @Input() targetDateMort: string = "2077-01-01T00:00:00";
  formattedTargetDate: string = '';

  ngOnInit() {
    this.formattedTargetDate = this.formatDateString(this.targetDateMort);
  }

  private formatDateString(dateString: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    const day = this.padTo2Digits(date.getDate());
    const month = this.padTo2Digits(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  private padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
