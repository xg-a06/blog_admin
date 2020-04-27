// import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import store from './redux';
import Check from './check'
import Test from './test'

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <Check />
        <Test />
      </Suspense>
    </Provider>
  );
}


export default App;
