import React from 'react';
import PropTypes from 'prop-types';
import { Box, useColorModeValue } from 'native-base';

const Wrapper = ({ children }) => {
  const bg = useColorModeValue('gray.200', 'gray.800');
  return (
    <Box flex={1} bg={bg} safeArea>
      {children}
    </Box>
  );
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
