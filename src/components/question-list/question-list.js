import React from 'react';
import { Box, FlatList, Text, ChevronRightIcon, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { useStoreState } from 'easy-peasy';

export const QuestionList = () => {
  const { questions, loading } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return !loading ? (
    <Box width='100%' height='45%' alignItems='center' p={5}>
      <ScrollView width='95%' alignItems='center'>
        <FlatList
          data={questions}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Box px={5} py={2} shadow={9} border={1} borderColor='lightgrey' my={2}>
                <HStack space='5' alignItems='center' justifyContent='space-between'>
                  <Text width='90%' numberOfLines={1}>
                    {item.title}
                  </Text>
                  <ChevronRightIcon />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.questionId}
        />
      </ScrollView>
    </Box>
  ) : null;
};

export default QuestionList;
