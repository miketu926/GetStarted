import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from '../reducers/errors/errors_reducer';
// import uiReducer from './ui/ui_reducer';
import sessionReducer from './session/session_reducer';


const RootReducers = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  // ui: uiReducer,
});

export default RootReducers;