import { createStore, compose } from "redux";

const store = compose(window.devToolsExtension && window.devToolsExtension())(
  createStore
)(rootReducer);

export default store;
