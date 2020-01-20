import * as React from 'react';
import { View, Text } from 'react-native';
import { RootStoreContext } from './contexts';

export const Component3 = () => {
  const context = React.useContext(RootStoreContext);
  return (
    <View>
      <Text>Component3</Text>
    </View>
  );
};
