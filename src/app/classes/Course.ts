import {ICourse} from '../interfaces/ICourse';

export class Course implements ICourse {
  creationDate: string;
  description: string;
  duration: number;
  id: number;
  title: string;
}
