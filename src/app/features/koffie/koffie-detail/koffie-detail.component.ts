import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { KoffieService } from 'src/app/core/koffie.service';
import { Koffie } from 'src/app/shared/koffie.model';



@Component({
  selector: 'app-koffie-detail',
  templateUrl: './koffie-detail.component.html',
  styleUrls: ['./koffie-detail.component.css']
})
export class KoffieDetailComponent implements OnInit {

  koffieNaam: string;
  koffie: Koffie;
  totaal: number;
  euroteken: string;

  constructor(private activatedRoute: ActivatedRoute, private koffieService: KoffieService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      this.koffieNaam = route.get('naam');
    })
    this.koffieService.getKoffie(this.koffieNaam)
      .subscribe((koffie: Koffie) => this.koffie = koffie);
    this.totaal = this.koffie.prijs * 1;
    this.euroteken = "€";
  }

  berekenTotaal(aantal: string) {
    this.totaal = this.koffie.prijs * parseInt(aantal);
  }
}