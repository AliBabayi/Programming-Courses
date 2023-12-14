import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  course: any
  id: any
  stars: number[] = [1, 2, 3, 4, 5];
  date = new Date()
  isEditable?: boolean;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (data: Params): void => {
        this.id = data['id'];
      },
    });
    this.http.get('assets/db.json').subscribe(response => {
      this.course = response
      console.log(response)
      for (let detail of this.course.courses) {
        if (this.id == detail.id) {
          this.course = detail
        }
      }
      if (this.course == response) {
        window.alert("Course has not been found")
      }
    });
  }

  toggleEditMode(): void {
    this.isEditable = !this.isEditable;
  }

  getStarClass(index: number): string {
    const roundedRating = Math.round(this.course.rating);
    if (this.course.rating >= index + 1) {
      return 'text-[#fca34e]';
    } else if (this.course.rating >= index + 0.5 && this.course.rating < roundedRating) {
      return 'text-[#fca34e]';
    } else {
      return 'text-[#fca34e]';
    }
  }
}
