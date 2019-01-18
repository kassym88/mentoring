import {IUser} from '../interfaces/IUser';

export class User implements IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
}
