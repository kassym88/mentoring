import {ICourse} from '../interfaces/ICourse';

export class Course implements ICourse {
  creationDate: Date;
  description: string;
  duration: number;
  id: number;
  title: string;
  topRated: boolean;
}
