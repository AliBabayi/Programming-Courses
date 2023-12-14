import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AllCourses } from "../types/types";
import { Observable } from "rxjs";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses?: any;
  isButtonActive: { [key: string]: boolean } = {};
  addedCourses: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/db.json').subscribe((response : Partial<Observable<AllCourses>>)  =>  {
      this.courses = response
      console.log(this.courses)
    });
  }

  toggleAddCourse(course : any) {
    this.isButtonActive[course.id] = !this.isButtonActive[course.id];
    if (this.addedCourses.includes(course)){
      this.addedCourses.splice(course);
    }
    else {
      this.addedCourses.push(course);
    }
  }
}
