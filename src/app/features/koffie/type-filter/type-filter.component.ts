import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  filter: string;

  @Output() typeKoffie = new EventEmitter<string>();

  filterOpType(value: string) {
    this.filter = value;
    this.typeKoffie.emit(this.filter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
