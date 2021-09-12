import React, { useState, useEffect } from 'react';
import { HStack, Text, Button, Center } from 'native-base';
import { useStoreActions } from 'easy-peasy';
import { SORT_BY } from './constants';
import propTypes from 'prop-types';

function SortBar({ itemsCount, user = {} }) {
  const [sortValue, setSortValue] = useState('');
  const [userId, setUserId] = useState(user?.userId);

  const { sortByAction } = useStoreActions((actions) => actions.stacklOverflowSearchReducer);

  const onSortBy = (value) => {
    if (sortValue !== value) {
      sortByAction(value);
      setSortValue(value);
    }
  };

  useEffect(() => {
    if (userId !== user?.userId) {
      setUserId(user.userId);
      setSortValue('');
    }
  }, [user]);

  return itemsCount ? (
    <Center>
      <HStack alignItems='center' space='2'>
        <Text numberOfLines={1} >Sort Questions By:</Text>
        <Button.Group variant='solid' isAttached space={1}>
          <Button
            size='xs'
            colorScheme={sortValue === SORT_BY.date ? 'primary' : 'dark'}
            mr={1}
            onPress={() => onSortBy(SORT_BY.date)}
          >
            <Text>Date</Text>
          </Button>
          <Button
            size='xs'
            colorScheme={sortValue === SORT_BY.answers ? 'primary' : 'dark'}
            mr={1}
            onPress={() => onSortBy(SORT_BY.answers)}
          >
            <Text>Answers</Text>
          </Button>
          <Button
            size='xs'
            colorScheme={sortValue === SORT_BY.views ? 'primary' : 'dark'}
            mr={1}
            onPress={() => onSortBy(SORT_BY.views)}
          >
            <Text>Views</Text>
          </Button>
        </Button.Group>
      </HStack>
    </Center>
  ) : null;
}

SortBar.propTypes = {
  itemsCount: propTypes.number,
  user: propTypes.object,
};
export default SortBar;
