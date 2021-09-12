import React from 'react';
import { Center, FlatList, ScrollView } from 'native-base';
import propTypes from 'prop-types';
import QuestionListItem from './question-list-item/question-list-item';

export default function QuestionsList({ items }) {
  return (
    <Center>
      <ScrollView height='45%' width='95%'>
        <FlatList
          data={items}
          renderItem={({ item }) => <QuestionListItem item={item} />}
          keyExtractor={(item) => item.questionId + item.creationDate.toString()}
        />
      </ScrollView>
    </Center>
  );
}

QuestionsList.propTypes = {
  items: propTypes.array.isRequired,
};
