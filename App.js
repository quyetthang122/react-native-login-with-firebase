// In App.js in a new project

import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Button, ActivityIndicator, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';
import {AuthContext} from './src/components/context';
import {firebase} from './src/config/firebase';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(
    () => ({
      Login: (userEmail, password) => {
        setIsLoading(true);
        firebase
          .auth()
          .signInWithEmailAndPassword(userEmail, password)
          .then((response) => {
            const uid = response.user.uid;
            setUserToken(uid);
            setIsLoading(false);

            // const usersRef = firestore().collection('users');
            // usersRef
            //   .doc(uid)
            //   .get()
            //   .then((firestoreDocument) => {
            //     if (!firestoreDocument.exists) {
            //       alert('User does not exist anymore.');
            //       return;
            //     }
            //     const user = firestoreDocument.data();
            //     navigation.navigate('Home', {user: user});
            //   });
          })
          .catch((error) => {
            setIsLoading(false);
            alert(error);
          });

        return userToken;
      },
      SignUp: async (userName, email, password) => {
        setIsLoading(true);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            const uid = response.user.uid;
            const data = {
              id: uid,
              email,
              userName,
            };
            const usersRef = firebase.firestore().collection('users');

            console.log(usersRef);
            usersRef
              .doc(uid)
              .set(data)
              .catch((error) => {
                console.warn(error);
                alert(error);
              });
            setUserToken(uid);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            alert(error);
          });
      },
      SignOut: () => {
        firebase.auth().signOut();
        setUserToken(null);
        setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken == null ? <AuthStack /> : <HomeStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
