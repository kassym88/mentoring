import {ICourse} from '../interfaces/ICourse';

export class Course implements ICourse {
  date: Date;
  description: string;
  duration: number;
  id: number;
  title: string;
  isTopRated: boolean;
  name: string;
  length: number;
  authors: {}[];
}
