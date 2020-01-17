import * as React from 'react';
import { View, Text } from 'react-native';
import { useStore } from './hooks/useStore';

export default () => {
  const context = useStore();
  return (
    <View>
      <Text>Component2</Text>
    </View>
  );
};
