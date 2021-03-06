import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    AppRoutingModule
  ]
})
export class StudentModule { }
