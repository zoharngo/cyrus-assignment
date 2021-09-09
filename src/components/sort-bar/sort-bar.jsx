import React from 'react';
import { HStack, Text, Button, Stack } from 'native-base';
import { useStoreState } from 'easy-peasy';

export default function SortBar() {
  const { questionsCount } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return questionsCount ? (
    <Stack alignItems='center' height='3'>
      <HStack alignItems='center' space='2'>
        <Text>Sort Questions By:</Text>
        <Button.Group variant='solid' isAttached space={1}>
          <Button size='xs' colorScheme='dark' mr={1}>
            Date
          </Button>
          <Button size='xs' colorScheme='dark' mr={1}>
            Answers
          </Button>
          <Button size='xs' colorScheme='dark' mr={1}>
            Views
          </Button>
        </Button.Group>
      </HStack>
    </Stack>
  ) : null;
}
