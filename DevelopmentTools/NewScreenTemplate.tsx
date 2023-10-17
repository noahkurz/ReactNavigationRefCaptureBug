import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import * as NativeBase from 'native-base'
import { TextInput } from 'react-native-gesture-handler';
import GlobalStyles from '../Styles/Styles';

//#region navigation
type ScreenNavigationProp<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};
//#endregion

// const CHANGE-ME-EXAMPLE: React.FC<Props<'CHANGE-ME-EXAMPLE'>> = () => {
//   return (
//     <View>
//       <Text>this is an example page</Text>
//     </View>
//   )
// };

// export default CHANGE-ME-EXAMPLE;

//#region Styles
const localStyles = {
  container: {
    backgroundColor: "#FF0000"
  }
}
//#endregion