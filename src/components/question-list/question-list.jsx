import React from 'react';
import { Box } from 'native-base';
import { ScrollView, FlatList } from 'react-native';
import { useStoreState } from 'easy-peasy';
import QuestionListItem from './question-list-item/question-list-item';

export const QuestionList = () => {
  const { questionsCount, questions } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return questionsCount ? (
    <Box width='100%' height='33%' alignItems='center' p={5}>
      <ScrollView width='95%' alignItems='center'>
        <FlatList
          data={questions}
          renderItem={({ item }) => <QuestionListItem item={item} />}
          keyExtractor={(item) => item.questionId}
        />
      </ScrollView>
    </Box>
  ) : null;
};

export default QuestionList;
