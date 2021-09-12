import React from 'react';
import { Center, Text } from 'native-base';
import propTypes from 'prop-types';
import { useStoreState } from 'easy-peasy';

function TotalItemsCount() {
  const { itemsCount } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return itemsCount ? (
    <Center>
      <Text bold={true}>{`Total of ${itemsCount} Question Found `}</Text>
    </Center>
  ) : null;
}
TotalItemsCount.propTypes = {
  itemsCount: propTypes.number,
};

export default TotalItemsCount;
