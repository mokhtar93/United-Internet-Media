import {
  LoadDataBeginAction,
  LoadDataSuccessAction,
  LoadDataFailureAction,
  AddBookmarkAction,
  DeleteBookmarkAction
} from "./data";
​
// Keep this type updated with each known action
export type ActionTypes =
  | LoadDataBeginAction
  | LoadDataSuccessAction
  | LoadDataFailureAction
  | AddBookmarkAction
  | DeleteBookmarkAction;
​
export enum Actions {
  LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE",
  ADD_BOOKMARK = "ADD_BOOKMARK",
  DELETE_BOOKMARK = "DELETE_BOOKMARK"
}
