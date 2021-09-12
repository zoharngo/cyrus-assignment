import React from 'react';
import { Avatar, Center, HStack, VStack, Text } from 'native-base';
import propTypes from 'prop-types';

function UserCard({ user }) {
  return user ? (
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
  ) : null;
}
UserCard.propTypes = {
  user: propTypes.object,
};

export default UserCard;
