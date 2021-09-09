import React from 'react';
import { Stack } from 'native-base';
import { Heading, SearchBar, ThemeToggle, UserCard, SortBar, QuestionList, TotalItemsCountFooter } from '../components';

const StaclOverflowSearch = () => {
  return (
    <Stack space={7}>
      <ThemeToggle />
      <Heading headerText='Get Stackoverflow Posts' />
      <SearchBar />
      <UserCard />
      <SortBar />
      <QuestionList />
      <TotalItemsCountFooter/>
    </Stack>
  );
};
export default StaclOverflowSearch;
