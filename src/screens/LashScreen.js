import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LashScreen({navigation}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#1334A1', '#1264FF']}
      style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: '-10%',
        }}>
        <Text style={styles.welcome}>Chào mừng bạn đến với ứng dụng</Text>
        <Image style={styles.logo} source={require('../assets/calendar.png')} />
        <Text style={styles.appName}>Note App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#1334A1', '#1264FF']}
            style={styles.buttonColor}>
            <Text style={styles.buttonText}>Bắt đầu lên lịch</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    fontWeight: '100',
  },
  logo: {
    height: 180,
    width: 200,
    marginRight: '5%',
  },
  appName: {
    fontSize: 50,
    color: 'white',
    fontWeight: '200',
  },
  button: {
    padding: 20,
  },
  buttonColor: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonText: {
    padding: 10,
    paddingHorizontal: 25,
    color: 'white',
  },
});
