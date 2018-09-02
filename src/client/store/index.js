import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import INITIAL_DATA from "./initialData.json";
import { syncWithLocalStorage } from "./middlewares";
import { read } from "./storage";

const initialData = read();

export default createStore(
  reducer,
  {
    ...INITIAL_DATA,
    ...(!!initialData ? { data: initialData } : {})
  },
  applyMiddleware(syncWithLocalStorage)
);
