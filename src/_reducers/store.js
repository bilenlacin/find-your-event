import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventsReducer } from "./events.reducer";
import { eventReducer } from "./event.reducer";
import { categoryReducer } from "./category.reducer";

const reducer = combineReducers({
    events: eventsReducer,
    event: eventReducer,
    category: categoryReducer
});

const middleware = [thunk];
const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
