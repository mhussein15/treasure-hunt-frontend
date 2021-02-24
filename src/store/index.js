import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import {useHistory} from "react-router-dom"
import {checkForToken,signin} from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const history = useHistory;

// store.dispatch(signin({username:"mhussein",password:"123456"},history));
store.dispatch(checkForToken());

export default store;
