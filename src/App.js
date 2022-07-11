// Note: App component...!
// Note: Redux persist is integrated and it's code is commited...!

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import {
  store,
  // persistor
}
  from './redux/store/store';

// Note: Importing required components...!
import Crud from './components/crud/crud';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <Crud />
        {/* </PersistGate> */}
      </Provider>
    </Fragment>
  );
}

export default App;