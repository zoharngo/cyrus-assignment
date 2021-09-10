import React, { useState } from 'react';
import { HStack, Text, Button, Stack } from 'native-base';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { SORT_BY } from './constants';

export default function SortBar() {
  const [sortValue, setSortValue] = useState('');
  const { questionsCount } = useStoreState((state) => state.stacklOverflowSearchReducer);
  const { sortBy } = useStoreActions((actions) => actions.stacklOverflowSearchReducer);

  const onSortBy = (value) => {
    if (sortValue !== value) {
      sortBy(value);
      setSortValue(value);
    }
  };

  return questionsCount ? (
    <Stack alignItems='center' height='3'>
      <HStack alignItems='center' space='2'>
        <Text>Sort Questions By:</Text>
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
    </Stack>
  ) : null;
}
