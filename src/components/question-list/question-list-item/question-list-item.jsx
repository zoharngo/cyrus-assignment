import React from 'react';
import { Box, Text, ChevronRightIcon, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function QuestionListItem({ item }) {
  return (
    <TouchableOpacity>
      <Box px={5} py={2} border={1} borderColor='lightgrey' my={2}>
        <HStack space='5' alignItems='center' justifyContent='space-between'>
          <Text width='90%' numberOfLines={1}>
            {item.title}
          </Text>
          <ChevronRightIcon />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}

QuestionListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default QuestionListItem;
