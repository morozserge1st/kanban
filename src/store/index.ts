import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { fork } from "redux-saga/effects";
import { RootState } from "types/RootState";
import { dialogReducer } from "./dialog/reducer";
import { listReducer } from "./lists/reducer";

function* rootSaga() {
  // yield fork(listSaga);
}

const rootReducer = combineReducers<RootState>({
  dialog: dialogReducer,
  list: listReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
