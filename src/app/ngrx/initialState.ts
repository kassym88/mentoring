import {IState} from '../interfaces/IState';
import {User} from '../classes/User';

export const initialState: IState = {
  user: new User(),
  courses: []
};
