import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  pageCourses: any;
  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPageCourses();
  }

  getPageCourses() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCoursePageById(id).subscribe(courses => this.pageCourses = courses);
  }
}
