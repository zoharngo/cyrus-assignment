import React from 'react';
import { Stack, Box, Text } from 'native-base';
import { Heading, SearchBar, ThemeToggle, UserCard, SortBar, QuestionList } from '../components';

const StaclOverflowSearch = () => {
  return (
    <Stack space={7}>
      <ThemeToggle />
      <Heading headerText='Get Stackoverflow Posts' />
      <SearchBar />
      <UserCard />
      <SortBar />
      <QuestionList />
      <Box px='10'>
        <Text>{`Total of ${200} Question Found `}</Text>
      </Box>
    </Stack>
  );
};
export default StaclOverflowSearch;
