import {IUser} from '../interfaces/IUser';

export class User implements IUser {
  // noinspection JSAnnotator
  constructor(private id: number,
              private firstName: string,
              private lastName: string);
}
