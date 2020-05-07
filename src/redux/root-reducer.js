import {combineReducers} from 'redux';

import IncrementDecrementReducer from './increment_decrement/increment_decrement.reducer';

const rootReducer = combineReducers({
  incrementDecrement: IncrementDecrementReducer,
});

export default rootReducer;
