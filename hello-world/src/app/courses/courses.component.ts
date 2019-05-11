import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  {{ course.title | uppercase | lowercase }} <br/>
  {{ course.students | number }} <br/>
  {{ course.rating | number: '2.1-1' }} <br/>
  {{ course.prices | currency: 'AUD':true:'3.2-2' }} <br/>
  {{ course.releaseDate | date: 'shortDate'  }} <br/>
  {{ text | summary : 20 }}
  `
})
export class CoursesComponent {

  course = {
    title: 'The complete angular course',
    rating: 4.98432,
    students: 30021,
    prices: 190.95,
    releaseDate: new Date(2019, 3, 1)
  };

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
}
