import React from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import IncrementDecrement from './screens/increment_decrement';

const ReduxSample = () => {
  return (
    <Provider store={store}>
      <IncrementDecrement />
    </Provider>
  );
};

export default ReduxSample;
