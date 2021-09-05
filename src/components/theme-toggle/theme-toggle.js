import React, { useState, useEffect} from 'react';
import { Switch, HStack, Text, useColorMode } from 'native-base';

const DARK_MODE = 'Dark mode';
const LIGHT_MODE = 'Light mode';

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [label, setLabel] = useState(DARK_MODE);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setLabel(colorMode === 'dark' ? LIGHT_MODE : DARK_MODE);
  }, [colorMode]);
  return (
    <HStack reversed={true} space={1}>
      <Text fontSize={'lg'}>{label}</Text>
      <Switch
        isChecked={isChecked}
        size='sm'
        onToggle={() => {
          toggleColorMode();
          setIsChecked((prevIsChecked) => !prevIsChecked);
        }}
      />
    </HStack>
  );
};

export default ThemeToggle;
