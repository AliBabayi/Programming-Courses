import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from "./details.component";
import { DetailsRoutingModule } from "./details-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class DetailsModule { }
