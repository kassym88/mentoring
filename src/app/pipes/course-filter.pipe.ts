import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/classes/Course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(value: Course[], filter: string): Course[] {
    if (filter) {
      return value.filter((item: Course) =>
        item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ||
        item.description.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    } else {
      return value;
    }

  }

}
