/***** Note: Main reducer file *****/
// Note: Redux persist is integrated and it's code is commited...!

import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web...!

// Note: Importing all reducers...!
import crudReducer from "./crud-reducer/crud-reducer";

// Note: Persist reducer configuration...!
// const persistConfig = {
//     key: "root",
//     storage: storage,
//     whiteList: ["crudStates"]
// };

// Note: This is the root reducer...!
const rootReducer = combineReducers({
    crudStates: crudReducer
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;