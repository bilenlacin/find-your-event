import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventReducer } from "./event.reducer";

const reducer = combineReducers({
    events: eventReducer
});

const middleware = [thunk];
const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
