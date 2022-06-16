import { Component, OnInit } from '@angular/core';
import { KoffieService } from 'src/app/core/koffie.service';
import { Koffie } from 'src/app/shared/koffie.model';

@Component({
  selector: 'app-koffie',
  templateUrl: './koffie.component.html',
  styleUrls: ['./koffie.component.css']
})
export class KoffieComponent implements OnInit {
  koffies: Koffie[];

  constructor(private koffieService: KoffieService) { }

  ngOnInit(): void {
    this.koffieService.getKoffies()
      .subscribe((movies: Koffie[]) => this.koffies = movies);
  }
}
