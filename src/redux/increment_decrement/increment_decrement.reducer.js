import IncrementDecrementTypes from './increment_decrement.types';

const INITIAL_STATE = {
  result: 0,
};

const IncrementDecrementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IncrementDecrementTypes.INCREMENT:
      return {
        ...state,
        result: state.result + 1,
      };
    case IncrementDecrementTypes.DECREMENT:
      return {
        ...state,
        result: state.result - 1,
      };
    default:
      return state;
  }
};

export default IncrementDecrementReducer;
