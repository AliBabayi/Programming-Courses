import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/db.json').subscribe(response => {
      this.courses = response
      console.log(this.courses)
    });
  }
}
