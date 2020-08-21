import React from 'react';
import {firebase} from '../config/firebase';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {AuthContext} from '../components/context';

export default function HomeScreen({navigation}) {
  const {SignOut} = React.useContext(AuthContext);

  let user = firebase.auth().currentUser;

  console.log(user);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => SignOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
