import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../components/context';

export default function SignupScreen({navigation}) {
  const [userData, setUserData] = useState({
    username: '',
    userEmail: '',
    password: '',
    checkInputChange: false,
    seePassword: false,
    isValidUserName: false,
    isValidUserEmail: false,
    isValidPassword: false,
  });

  const {SignUp} = React.useContext(AuthContext);

  const validateUserName = (val) => {
    if (val.trim().length >= 4) {
      setUserData({
        ...userData,
        username: val,
        isValidUserName: true,
      });
    } else {
      setUserData({
        ...userData,
        username: val,
        isValidUserName: false,
      });
    }
  };

  const validateUserEmail = (val) => {
    if (val.trim().length >= 4 && val.indexOf('@') !== -1) {
      setUserData({
        ...userData,
        userEmail: val,
        checkInputChange: true,
        isValidUserEmail: true,
      });
    } else {
      setUserData({
        ...userData,
        userEmail: val,
        checkInputChange: false,
        isValidUserEmail: false,
      });
    }
  };

  const validatePassword = (val) => {
    if (val.trim().length >= 8) {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUserEmail = (val) => {
    if (val.trim().length >= 4) {
      setUserData({
        ...userData,
        isValidUserEmail: true,
      });
    } else {
      setUserData({
        ...userData,
        isValidUserEmail: false,
      });
    }
  };

  const seePassword = () => {
    setUserData({
      ...userData,
      seePassword: !userData.seePassword,
    });
  };

  const handleSignUp = (userName, email, password) => {
    if (
      userData.username.length < 4 ||
      userData.userEmail.length < 4 ||
      userData.password.length < 8
    ) {
      Alert.alert(
        'Oop!',
        'Đã xảy ra lỗi, vui vòng kiểm tra lại Họ và Tên, email và mật khẩu!',
        [{text: 'Okay'}],
      );
      return;
    }

    SignUp(userName, email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#1334A1', '#1264FF']}
        style={styles.container}>
        <Header
          style={{paddingBottom: 100}}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-backspace"
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Đăng ký tài khoản',
            style: {color: '#fff', fontSize: 18},
          }}
          rightComponent={
            <TouchableOpacity onPress={() => null}>
              <MaterialIcons name="more-vert" size={30} color={'white'} />
            </TouchableOpacity>
          }
          backgroundColor="none"
          containerStyle={{
            borderBottomWidth: 0,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '-10%',
          }}>
          <Image
            style={styles.logo}
            source={require('../assets/calendar.png')}
          />
          <Text style={styles.appName}>Note App</Text>

          <View style={styles.username}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#1334A1', '#1264FF']}
              style={styles.userIconGra}>
              <FontAwesome
                name="user"
                color={'black'}
                size={35}
                style={styles.userIcon}
              />
            </LinearGradient>
            {/* ------- Username Input -------- */}
            <TextInput
              placeholder="Họ và Tên"
              style={styles.userText}
              autoCapitalize="none"
              onChangeText={(val) => validateUserName(val)}
            />
            <View style={{width: 20}}>
              <FontAwesome
                name="user"
                color={'#9f9f9f'}
                size={20}
                style={styles.userIconRight}
              />
            </View>
          </View>
          {userData.isValidUserName ? null : (
            <View>
              <Text style={styles.errorMsg}>
                Email phải có ít nhất 4 ký tự.
              </Text>
            </View>
          )}

          {/* Email Input */}

          <View style={styles.username}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#1334A1', '#1264FF']}
              style={styles.userIconGra}>
              <FontAwesome
                name="envelope-square"
                color={'black'}
                size={30}
                style={styles.userIcon}
              />
            </LinearGradient>
            {/* ------- Username Input -------- */}
            <TextInput
              placeholder="Địa chỉ Email"
              placeholderTextColor="#666666"
              style={styles.userText}
              autoCapitalize="none"
              onChangeText={(val) => validateUserEmail(val)}
              onEndEditing={(e) => handleValidUserEmail(e.nativeEvent.text)}
            />
            <View style={{width: 20}}>
              {userData.checkInputChange ? (
                <View>
                  <Feather name="check-circle" color="green" size={20} />
                </View>
              ) : null}
            </View>
          </View>

          {userData.isValidUserEmail ? null : (
            <View>
              <Text style={styles.errorMsg}>
                Email phải có trên 4 ký tự và @
              </Text>
            </View>
          )}

          {/* Password Input */}

          <View style={styles.username}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#1334A1', '#1264FF']}
              style={styles.userIconGra}>
              <FontAwesome
                name="lock"
                color={'black'}
                size={35}
                style={styles.userIcon}
              />
            </LinearGradient>

            {/* ------- Password Input -------- */}
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="#666666"
              style={styles.userText}
              secureTextEntry={userData.seePassword ? false : true}
              autoCapitalize="none"
              onChangeText={(val) => validatePassword(val)}
            />
            <View style={{width: 20}}>
              <TouchableOpacity onPress={() => seePassword()}>
                {userData.seePassword ? (
                  <Feather name="eye" color="grey" size={20} />
                ) : (
                  <Feather name="eye-off" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {userData.isValidPassword ? null : (
            <View>
              <Text style={styles.errorMsg}>
                Password phải có ít nhất 8 ký tự
              </Text>
            </View>
          )}

          <View style={styles.buttonFlex}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleSignUp(
                  userData.username,
                  userData.userEmail,
                  userData.password,
                )
              }>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#1334A1', '#1264FF']}
                style={styles.buttonColor}>
                <Text style={styles.buttonText}>Đăng ký</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
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
    height: 110,
    width: 200,
    marginRight: '5%',
  },
  appName: {
    fontSize: 30,
    color: 'white',
    fontWeight: '200',
    marginTop: 20,
  },
  username: {
    flexDirection: 'row',
    width: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconGra: {
    marginLeft: -25,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 150,
  },
  userIcon: {
    color: 'white',
  },
  userIconRight: {},
  userText: {
    minWidth: '52%',
  },
  usernameInput: {},
  buttonFlex: {
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    alignItems: 'center',
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
    paddingHorizontal: 30,
    color: 'white',
  },
  errorMsg: {
    marginTop: 5,
    color: '#F12313',
    fontSize: 12,
  },
});
