import React, { useState, useEffect } from 'react';
import { VStack, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useStoreActions } from 'easy-peasy';

function SearchBar() {
  const [userIdValue, setUserIdValue] = useState('');
  const { getQuestionByUserIdAction, setIsLoadingAction, clearStateAction } = useStoreActions(
    (actions) => actions.stacklOverflowSearchReducer
  );
  useEffect(() => {
    if (!userIdValue || !/^\d*$/.test(userIdValue)) {
      clearStateAction();
      return;
    }
    const cancelDebounce = setTimeout(() => {
      setIsLoadingAction(true);
      getQuestionByUserIdAction(userIdValue).then(() => {
        setIsLoadingAction(false);
      });
    }, 1500);

    return () => {
      clearTimeout(cancelDebounce);
    };
  }, [userIdValue]);

  return (
    <VStack alignItems='center' space={8} width='100%'>
      <VStack width='75%' space={2}>
        <Input
          color='gray.500'
          onChangeText={setUserIdValue}
          value={userIdValue}
          borderColor='grey'
          placeholder='Search'
          variant='filled'
          width='100%'
          bg='gray.200'
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={<Icon size='sm' ml={2} color='gray.400' as={<Ionicons name='ios-search' />}
          ol
          />}
        />
      </VStack>
    </VStack>
  );
}

export default SearchBar;
