import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import List from "./components/List";
import EditModal from "./components/EditModal";

export default function Page() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <List />
        <EditModal />
      </React.Fragment>
    </Provider>
  );
}
