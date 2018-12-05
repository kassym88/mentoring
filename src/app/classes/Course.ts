import {ICourse} from '../interfaces/ICourse';

export class Course implements ICourse {
  // noinspection JSAnnotator
  constructor(private creationDate: string,
              private description: string,
              private duration: number,
              private id: number,
              private title: string)
}
