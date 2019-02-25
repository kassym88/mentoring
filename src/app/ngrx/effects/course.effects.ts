import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {tap, map, exhaustMap, catchError} from 'rxjs/operators';

import {CourseService} from '../../services/course.service';
import {Course} from '../../classes/Course';
import {
  CourseActionTypes,
  GetList,
  GetListSuccess,
  GetListError,
  Update,
  UpdateSuccess,
  UpdateError,
  Create,
  CreateSuccess, CreateError
} from '../actions/course';

@Injectable()
export class CourseEffects {
  constructor(private actions: Actions,
              private cs: CourseService) {}

  @Effect()
  getList$ = this.actions.pipe(
    ofType(CourseActionTypes.GetList),
    map((action: GetList) => action.payload),
    exhaustMap((payload: {start: number, count: number}) =>
      this.cs.getCourseList(payload.start, payload.count)
        .pipe(
          map((courses: Course[]) => new GetListSuccess({courses})),
          catchError((er: any) => of(new GetListError(er)))
        )
    )
  );

  @Effect({dispatch: false})
  getListError$ = this.actions.pipe(
    ofType(CourseActionTypes.GetListError),
    map((action: GetListError) => action.payload),
    tap((payload: any) => alert(payload.error))
  );

  @Effect()
  update$ = this.actions.pipe(
    ofType(CourseActionTypes.Update),
    map((action: Update) => action.payload),
    exhaustMap((payload: Course) =>
      this.cs.updateCourse3(payload)
        .pipe(
          map((resp: any) => new UpdateSuccess(payload)),
          catchError((er: any) => of(new UpdateError(er)))
        )
    )
  );

  @Effect({dispatch: false})
  updateError$ = this.actions.pipe(
    ofType(CourseActionTypes.UpdateError),
    map((action: UpdateError) => action.payload),
    tap((payload: any) => alert(payload.error))
  );

  @Effect()
  create$ = this.actions.pipe(
    ofType(CourseActionTypes.Create),
    map((action: Create) => action.payload),
    exhaustMap((payload: Course) =>
      this.cs.updateCourse3(payload)
        .pipe(
          map((resp: any) => new CreateSuccess(payload)),
          catchError((er: any) => of(new UpdateError(er)))
        )
    )
  );

  @Effect({dispatch: false})
  createError$ = this.actions.pipe(
    ofType(CourseActionTypes.CreateError),
    map((action: CreateError) => action.payload),
    tap((payload: any) => alert(payload.error))
  );
}
