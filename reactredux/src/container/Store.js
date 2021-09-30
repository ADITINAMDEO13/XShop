import { createStore } from "redux";
import reducers from "./redux/reducers";

const Store=createStore(
    reducers,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default Store;