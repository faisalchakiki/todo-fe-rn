import React from 'react';
import { Homepage } from './src/pages';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}
