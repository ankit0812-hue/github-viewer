import { createStore, combineReducers, applyMiddleware } from "redux";
import { RepositoryReducer } from "./reducers/RepositoryReducer";
import ReduxThunk from "redux-thunk";

const reducers = combineReducers({ repository: RepositoryReducer });
const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
