import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { saveState } from '../store/localstorage';

const configureStore = (persistedState) => {
  let state = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));
  state.subscribe(() => {
    saveState(state.getState())
  })
  return state;
}
export { configureStore };
