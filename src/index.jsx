import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { WebViewModal, Wrapper } from './components';
import StaclOverflowSearch from './screens/stack-overflow-search';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NativeBaseProvider>
        <Wrapper>
          <StaclOverflowSearch />
        </Wrapper>
      </NativeBaseProvider>
      <WebViewModal />
    </StoreProvider>
  );
}
