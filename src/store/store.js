import { createStore } from 'easy-peasy';
import { stacklOverflowSearchReducer } from './reducers';

const model = {
  stacklOverflowSearchReducer,
};

const store = createStore(model, {
  name: 'stacklOverflowStore',
});

export default store;
