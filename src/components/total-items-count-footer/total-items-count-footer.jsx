import React from 'react';
import { Box, Text } from 'native-base';
import { useStoreState } from 'easy-peasy';

function TotalItemsCountFooter() {
  const { questionsCount } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return (
    <Box px='10'>
      <Text>{`Total of ${questionsCount} Question Found `}</Text>
    </Box>
  );
}


export default TotalItemsCountFooter;
