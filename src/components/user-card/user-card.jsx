import React from 'react';
import { Box, Avatar, Center, HStack, VStack, Text } from 'native-base';
import { useStoreState } from 'easy-peasy';

export default function UserCard() {
  const { user, loading } = useStoreState((state) => state.stacklOverflowSearchReducer);
  console.log(user);
  return !loading && user ? (
    <Box p={4}>
      <Center>
        <HStack space='15px'>
          <Avatar
            size='xl'
            source={{
              uri: user.profileImage,
            }}
          ></Avatar>
          <VStack space='4'>
            <HStack>
              <Text bold={true}>Display Name: </Text>
              <Text>{user.displayName}</Text>
            </HStack>
            <HStack>
              <Text bold={true}>Reputation: </Text>
              <Text>{user.reputation}</Text>
            </HStack>
            <HStack>
              <Text bold={true}>Accept Rate: </Text>
              <Text>{user.acceptRate}</Text>
            </HStack>
          </VStack>
        </HStack>
      </Center>
    </Box>
  ) : null;
}
