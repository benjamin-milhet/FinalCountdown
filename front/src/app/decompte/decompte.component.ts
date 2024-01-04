import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrls: ['./decompte.component.css']
})
export class DecompteComponent implements OnInit {
  @Input() targetDate: string = "2077-01-01T00:00:00";
  timeLeft: any = {};

  constructor() { }

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const target = new Date(this.targetDate);
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    if (difference > 0) {
      this.timeLeft = {
        annees: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
        mois: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)) % 12,
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)) % 30,
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60)
      };
    } else {
      this.timeLeft = { annees: 0, mois: 0, jours: 0, heures: 0, minutes: 0, secondes: 0 };
    }
  }
}
