import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course={courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""

}
 

  constructor(private serviceobj:ServiceService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.serviceobj.Addcourse(this.course).subscribe((Data)=>{})
    console.log(this.course)
    alert("success");
  
  }
}
