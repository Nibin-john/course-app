import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  viewcourse=()=>{this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")}

Addcourse(course:any){
  return this.http.post<any>('https://mylinkurcodesapp.herokuapp.com/addcourse',course);
}
}