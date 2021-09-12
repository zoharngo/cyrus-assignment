import React from 'react';
import { Box, VStack } from 'native-base';
import { Heading, SearchBar, ThemeToggle, SearchResultsContainer } from '../components';

const StaclOverflowSearch = () => {
  return (
    <VStack space={4}>
      <Box p={2}>
        <ThemeToggle />
      </Box>

      <VStack space={2}>
        <Heading headerText='Get Stackoverflow Posts' />
        <SearchBar />
        <SearchResultsContainer />
      </VStack>
    </VStack>
  );
};
export default StaclOverflowSearch;
