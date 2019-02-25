import {Action} from '@ngrx/store';
import {Course} from '../../classes/Course';

export enum CourseActionTypes {
  GetList = 'Course.GetList',
  GetListSuccess = 'Course.GetListSuccess',
  GetListError = 'Course.GetListError',
  Update = 'Course.Update',
  UpdateSuccess = 'Course.UpdateSuccess',
  UpdateError = 'Course.UpdateError',
  Create = 'Course.Create',
  CreateSuccess = 'Course.CreateSuccess',
  CreateError = 'Course.CreateError'
}

export class GetList implements Action {
  readonly type = CourseActionTypes.GetList;

  constructor(public payload: {start: number, count: number}) {}
}

export class GetListSuccess implements Action {
  readonly type = CourseActionTypes.GetListSuccess;

  constructor(public payload: {courses: Course[]}) {}
}

export class GetListError implements Action {
  readonly type = CourseActionTypes.GetListSuccess;

  constructor(public payload: any) {}
}

export class Update implements Action {
  readonly type = CourseActionTypes.Update;

  constructor(public payload: Course) {}
}

export class UpdateSuccess implements Action {
  readonly type = CourseActionTypes.UpdateSuccess;

  constructor(public payload: Course) {}
}

export class UpdateError implements Action {
  readonly type = CourseActionTypes.UpdateError;

  constructor(public payload: any) {}
}

export class Create implements Action {
  readonly type = CourseActionTypes.Create;

  constructor(public payload: Course) {}
}

export class CreateSuccess implements Action {
  readonly type = CourseActionTypes.CreateSuccess;

  constructor(public payload: Course) {}
}

export class CreateError implements Action {
  readonly type = CourseActionTypes.CreateError;

  constructor(public payload: any) {}
}

export type CourseActions =
  | GetList
  | GetListSuccess
  | GetListError
  | Update
  | UpdateSuccess
  | UpdateError
  | Create
  | CreateSuccess
  | CreateError;
