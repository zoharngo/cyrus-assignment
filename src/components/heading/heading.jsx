import React from 'react';
import PropTypes from 'prop-types';

import { Heading as NativeHeading, Text } from 'native-base';

export default function Heading({ headerText = '' }) {
  return (
    <NativeHeading
      alignSelf={{
        base: 'center',
        md: 'flex-start',
      }}
    >
      <Text>{headerText}</Text>
    </NativeHeading>
  );
}

Heading.propTypes = {
  headerText: PropTypes.string,
};
