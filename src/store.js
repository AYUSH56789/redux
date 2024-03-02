import { createStore } from 'redux'; // Importing createStore from Redux, not React
import rootReducer from "./reducers";

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
