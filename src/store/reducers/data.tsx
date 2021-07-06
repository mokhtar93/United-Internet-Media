import { Actions, ActionTypes } from "../actions/index";
​
interface DataState {
  bookmarks: Array<any>;
  originalBookmarks : Array<any>;
  loading: boolean;
  error: any;
}
​
export const getInitialState = () => {
  return {
    bookmarks: [],
    originalBookmarks : [],
    loading: false,
    error: null
  };
};
​
const dataReducer = (state: DataState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case Actions.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
​
    case Actions.LOAD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        bookmarks: action.payload.data,
        originalBookmarks :action.payload.data
      };
    }
​
    case Actions.LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Actions.ADD_BOOKMARK: {
      return {
        ...state,
        loading: false,
        bookmarks: [ action.payload.bookamrk, ...state.bookmarks],
        originalBookmarks : [ action.payload.bookamrk, ...state.originalBookmarks],
      };
    }
​   case Actions.DELETE_BOOKMARK: {

    return {
      ...state,
      loading: false,
      bookmarks: state.bookmarks.filter(bookmark =>  bookmark.id !== action.payload),
      originalBookmarks: state.originalBookmarks.filter(bookmark =>  bookmark.id !== action.payload),

    };
  }

    default:
      return state;
  }
};
​
export default dataReducer;
