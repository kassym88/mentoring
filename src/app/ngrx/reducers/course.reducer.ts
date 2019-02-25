import {IState} from '../../interfaces/IState';
import {initialState} from '../initialState';
import {CourseActionTypes, CourseActions} from '../actions/course';
import {Course} from '../../classes/Course';

export function courseReducer(state: IState = initialState, action: CourseActions) {
  switch (action.type) {
    case CourseActionTypes.GetListSuccess:
      return {
        user: {
          ...state.user
        },
        courses: [
          ...state.courses,
          ...action.payload.courses
        ]
      };
    case CourseActionTypes.UpdateSuccess:
      const courseList = [...state.courses];
      const target: Course = courseList.find((course: Course) => course.id === action.payload.id);
      Object.keys(target).forEach((key: string) => target[key] = action.payload[key]);
      return {
        user: {
          ...state.user
        },
        courses: courseList
      };
    case CourseActionTypes.CreateSuccess:
      return {
        user: {
          ...state.user
        },
        courses: [...state.courses, action.payload]
      };
    default:
      return state;
  }
}
