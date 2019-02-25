import {User} from '../classes/User';
import {Course} from '../classes/Course';

export interface IState {
  user: User;
  courses: Course[];
}
