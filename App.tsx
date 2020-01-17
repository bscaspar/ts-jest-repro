import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Component1, Component2 } from './src';
import { RootStoreContext } from './src/contexts';

export class RootStore {}

export default class App extends React.Component {
  private rootStore = new RootStore();
  render() {
    return (
      <RootStoreContext.Provider value={this.rootStore}>
        <View style={styles.container}>
          <Component1 />
          <Component2 />
        </View>
      </RootStoreContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
