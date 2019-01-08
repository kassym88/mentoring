import {Course} from 'app/classes/Course';

export const Courses: Course[] = [
  {
    creationDate: new Date('01/09/2018'),
    description: 'First course',
    duration: 50,
    id: 1,
    title: 'Course 1',
    topRated: true
  },
  {
    creationDate: new Date('2018-09-02'),
    description: 'Second course',
    duration: 90,
    id: 2,
    title: 'Course 2',
    topRated: false
  },
  {
    creationDate: new Date('2018-09-03'),
    description: 'Third course',
    duration: 120,
    id: 3,
    title: 'Course 3',
    topRated: true
  },
  {
    creationDate: new Date('2019-09-03'),
    description: 'Third course',
    duration: 150,
    id: 4,
    title: 'Course 3',
    topRated: false
  },
  {
    creationDate: new Date('2019-01-03'),
    description: 'Third course',
    duration: 165,
    id: 5,
    title: 'Course 3',
    topRated: true
  }
];
