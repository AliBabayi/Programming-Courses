import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from "./courses.component";
import { CoursesRoutingModule } from "./courses-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class CoursesModule { }
