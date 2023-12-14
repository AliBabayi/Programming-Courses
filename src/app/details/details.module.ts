import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from "./details.component";
import { DetailsRoutingModule } from "./details-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule } from "@angular/forms";
import { ShortDatePipe } from "../pipes/shortDate";


@NgModule({
  declarations: [
    DetailsComponent,
    ShortDatePipe
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ]
})
export class DetailsModule { }
