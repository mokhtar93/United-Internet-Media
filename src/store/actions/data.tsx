import { Actions } from "../actions/index";


interface DataResponse {
  bookmarks: [];
}
​
export function loadData() {

  return async dispatch => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(loadDataBegin());
​
    try {

      let response = await fetch("http://localhost:3000/bookmarks");

      handleErrors(response);
​
      let bookmarks: DataResponse = await response.json();
​
      // Trigger the LOAD_DATA_SUCCESS action

      dispatch(loadDataSuccess(bookmarks));
      return bookmarks;
    } catch (error) {
      // Trigger the LOAD_DATA_FAILURE action
      dispatch(loadDataFailure(error));
    }
  };
}
​
function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
​
export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
}
​
export const loadDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN
  });
};
​
export interface LoadDataSuccessAction {
  type: Actions.LOAD_DATA_SUCCESS;
  payload: any;
}
​
export const loadDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_SUCCESS,
    payload: { data }
  });
};
​
export interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}
​
export const loadDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_FAILURE,
    payload: { error }
  });
};

export interface AddBookmarkAction {
  type: Actions.ADD_BOOKMARK;
  payload: any;
}

export const addBookmark = bookamrk => async (dispatch, _getState) => {

  return dispatch({
    type: Actions.ADD_BOOKMARK,
    payload: { bookamrk }
  });
};

export interface DeleteBookmarkAction {
  type: Actions.DELETE_BOOKMARK;
  payload: any;
}

export const deleteBookmark = id => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.DELETE_BOOKMARK,
    payload: id
  });
};




