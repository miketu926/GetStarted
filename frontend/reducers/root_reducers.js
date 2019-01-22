import { combineReducers } from 'redux';
// import entitiesReducer from './entities/entities_reducer';
// import usersReducer from './users/users_reducer';
// import errorsReducer from './errors/errors_reducer';
// import uiReducer from './ui/ui_reducer';
import sessionReducer from './session/session_reducer';


const RootReducers = combineReducers({
  // entities: entitiesReducer,
  // users: usersReducer,
  // errors: errorsReducer,
  // ui: uiReducer,
  session: sessionReducer,
})

export default RootReducers;