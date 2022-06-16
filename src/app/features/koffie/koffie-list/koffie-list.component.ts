import { Component, Input, OnInit } from '@angular/core';
import { Koffie } from 'src/app/shared/koffie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-koffie-list',
  templateUrl: './koffie-list.component.html',
  styleUrls: ['./koffie-list.component.css']
})
export class KoffieListComponent implements OnInit {
  
  gefilterdeKoffies: Koffie[];
  euroteken: string;

  private _koffies: Koffie[] = []; 
  @Input() get koffies(): Koffie[] {
    return this._koffies;
  }

  set koffies(value: Koffie[]) {
    if (value) {
      this.gefilterdeKoffies = value;
      this._koffies = value;
    }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.gefilterdeKoffies = [];
    this.euroteken = "€";
  }

  filteren(naamKoffie: string) {
    if (naamKoffie == null || naamKoffie.length == 0) {
      this.gefilterdeKoffies = this._koffies;
      
    }
    else {
      this.gefilterdeKoffies = this._koffies
        .filter(koffie => koffie.naam.toLowerCase().indexOf(naamKoffie.toLowerCase()) > -1);
    }
  }

  onSelect(koffie : Koffie) {
    this.router.navigate(['/koffie-detail', koffie.naam]);
  }

  filterOpType(typeKoffie: string) {
    if (typeKoffie == null || typeKoffie.length == 0) {
      this.gefilterdeKoffies = this._koffies;
    }
    else {
      this.gefilterdeKoffies = this._koffies
        .filter(koffie => koffie.type === typeKoffie);
    }
  }

}
