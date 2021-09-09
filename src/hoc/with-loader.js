import React from 'react';
import { useStoreState } from 'easy-peasy';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';

export function withLoader(WrappedComponent) {
  const withLoader = ({ ...props }) => {
    const { loading } = useStoreState((state) => state.stacklOverflowSearchReducer);

    return !loading ? (
      <WrappedComponent {...props} />
    ) : (
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color='gray.400'  />
      </View>
    );
  };

  withLoader.propTypes = {};

  return withLoader;
}
