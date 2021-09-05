import React from 'react';
import { Box, HStack, Text, Button } from 'native-base';

export default function SortBar() {
  return (
    <Box alignItems='center' p={1}>
      <HStack alignItems='center' space='2' p={1}>
        <Text>Sort Questions By:</Text>
        <Button.Group variant='solid' isAttached space={1}>
          <Button size='xs' colorScheme='dark' mr={1} h={6}>
            Date
          </Button>
          <Button size='xs' colorScheme='dark' mr={1} h={6}>
            Answers
          </Button>
          <Button size='xs' colorScheme='dark' mr={1} h={6}>
            Views
          </Button>
        </Button.Group>
      </HStack>
    </Box>
  );
}
