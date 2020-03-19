import { Injectable } from '@angular/core';
import {COURSES_LIST} from './coursesList';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = COURSES_LIST;
  constructor() { }
  getCoursesList(): Observable<string[]> {
    return of(this.courses);
  }
  getCoursePageById(id): Observable<any> {
    const neededCoursePage = this.courses.find(coursesPage => coursesPage.id === id);
    return of(neededCoursePage);
  }
}
