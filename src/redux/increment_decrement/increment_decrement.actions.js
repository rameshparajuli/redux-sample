import IncrementDecrementTypes from './increment_decrement.types';

export const Increment = () => ({
  type: IncrementDecrementTypes.INCREMENT,
});

export const Decrement = () => ({
  type: IncrementDecrementTypes.DECREMENT,
});
