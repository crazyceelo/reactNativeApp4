import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

// placeholder reducer to start with
// export default combineReducers({
//   placeholderReducer: () => []
// });

export default combineReducers({
  auth: AuthReducer
});
