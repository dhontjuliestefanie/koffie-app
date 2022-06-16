import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-koffie-filter',
  templateUrl: './koffie-filter.component.html',
  styleUrls: ['./koffie-filter.component.css']
})
export class KoffieFilterComponent implements OnInit {

  filter: string;

  @Output() naamKoffie = new EventEmitter<string>();

  filteren(value: string) {
    this.filter = value;
    this.naamKoffie.emit(this.filter);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
