import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";

// placeholder reducer to start with
// export default combineReducers({
//   placeholderReducer: () => []
// });

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
