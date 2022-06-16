import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Koffie } from '../shared/koffie.model';

const API_URL = environment.KoffieURL;

@Injectable({
  providedIn: 'any'
})
export class KoffieService {

  constructor(private http: HttpClient) {
  }

  getKoffies(): Observable<Koffie[]> {
    return this.http.get<Koffie[]>(API_URL)
      .pipe(
        tap(result => { console.log("opgehaald data :", result) }),
      );
  }

  getKoffie(koffieNaam: string): Observable<Koffie> {
    return this.http.get<Koffie[]>(API_URL)
      .pipe(
        map(koffies => {
          const koffie = koffies.filter((kof: Koffie) => kof.naam === koffieNaam);
          return (koffie && koffie.length) ? koffie[0] : null;
        }),
      );
  }
}
