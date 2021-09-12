import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Center, Text, VStack } from 'native-base';
import QuestionsList from '../questions-list/questions-list';
import SortBar from '../sort-bar/sort-bar';
import UserCard from '../user-card/user-card';
import TotalItemsCount from '../total-items-count/total-items-count';
import { withLoader } from '../../hoc/with-loader';
import styles from './search-results-container.style';

export const SearchResultsContainer = () => {
  const {
    itemsCount,
    data: { items, user },
  } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return itemsCount ? (
    <VStack p={5} space={4}>
      <UserCard user={user} />
      <SortBar itemsCount={itemsCount} user={user} />
      <QuestionsList items={items} />
      <TotalItemsCount style={styles.totalItemsCount} itemsCount={itemsCount} />
    </VStack>
  ) : (
    <Center>{user && <Text> `No questions found for this user ${user.userId}` </Text>}</Center>
  );
};

export default withLoader(SearchResultsContainer);
