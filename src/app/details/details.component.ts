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

      for (let detail of this.course.courses) {
        if (this.id == detail.id) {
          this.course = detail
          console.log(this.course)
        }
      }
      if (this.course == response) {
        window.alert("Course has not been found")
      }
    });
  }

  getStarClass(index: number): string {
    const roundedRating = Math.round(this.course.rating);
    if (this.course.rating >= index + 1) {
      return 'text-yellow-500';
    } else if (this.course.rating >= index + 0.5 && this.course.rating < roundedRating) {
      return 'text-yellow-500';
    } else {
      return 'text-gray-400';
    }
  }
}
