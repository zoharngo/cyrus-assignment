import React from 'react';
import { Box, FlatList } from 'native-base';
import { ScrollView } from 'react-native';
import { useStoreState } from 'easy-peasy';
import QuestionListItem from './question-list-item/question-list-item';

export const QuestionList = () => {
  const { questions, loading } = useStoreState((state) => state.stacklOverflowSearchReducer);
  console.log('!loading', !loading);
  console.log('questions.length', questions.length);

  return !loading && questions.length ? (
    <Box width='100%' height='32%' alignItems='center' p={5}>
      <ScrollView width='95%' alignItems='center'>
        <FlatList
          data={questions}
          renderItem={({ item }) => (
            <QuestionListItem item={item} />
          )}
          keyExtractor={(item) => item.questionId}
        />
      </ScrollView>
    </Box>
  ) : null;
};

export default QuestionList;
