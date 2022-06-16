import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KoffieComponent } from './koffie/koffie.component';
import { KoffieListComponent } from './koffie-list/koffie-list.component';
import { KoffieFilterComponent } from './koffie-filter/koffie-filter.component';
import { KoffieDetailComponent } from './koffie-detail/koffie-detail.component';
import { TypeFilterComponent } from './type-filter/type-filter.component';



@NgModule({
  declarations: [
    KoffieComponent,
    KoffieListComponent,
    KoffieFilterComponent,
    KoffieDetailComponent,
    TypeFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KoffieModule { }
