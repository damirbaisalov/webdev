import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  componentCourses: string[];
  constructor(public coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getComponentCourses();
  }
  getComponentCourses() {
    this.coursesService.getCoursesList().subscribe(courses => this.componentCourses = courses);
  }
}
