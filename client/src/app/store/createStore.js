import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog";
import usersReducer from "./users";


const rootReducer = combineReducers({
  catalog: catalogReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
