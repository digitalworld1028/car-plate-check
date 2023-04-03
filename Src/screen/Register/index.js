import React, { useRef, useState } from 'react';

import { Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../../components/InputField';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';

import Button from '../../components/Button';
// import { CheckBox, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import CheckBox from 'react-native-check-box'

import { styles } from './styles';

const Register = ({ navigation }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const [confirPass, SetConfirmPass] = useState(null);
  const [check, setCheck] = useState(false);
  const [info, setInfo] = useState('');

  return (
    <LinearGradient colors={['rgb(170,170,170)', '#FFFFFF']} locations={[0, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          height: verticalScale(790),
        }}
      >
        <SafeAreaView style={styles.container}>
          <View style={{}}>
            <Image
              resizeMode={'contain'}
              source={Images.logo2}
              style={{
                width: verticalScale(108),
                height: verticalScale(153),
                marginTop: verticalScale(40),
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: verticalScale(35),
            }}>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: horizontalScale(23),
                color: '#1A1C20',
                fontFamily: 'RobotoCondensed-Bold',
              }}>
              {'REGISTRARSE'}
            </Text>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: verticalScale(18),
                color: '#1A1C20',
                fontFamily: 'RobotoCondensed-Regular',
                letterSpacing: verticalScale(2),
              }}>
              INFORMACIÓN PERSONAL
            </Text>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 18,
                color: '#1A1C20',
                width: horizontalScale(250),
                textAlign: 'center',
                fontFamily: 'RobotoCondensed-Light',
              }}
            >
              Agrega tu información para acceder a nuestros servicios
            </Text>
          </View>
          <View style={{
            width: '100%',
            height: verticalScale(1),
            backgroundColor: '#BFBFBF',
            marginTop: verticalScale(16),
          }}>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: verticalScale(12),
            }}>
            <InputField
              ref={nameRef}
              value={userName}
              marginVertical={6}
              onChangeText={v => setUserName(v)}
              onSubmitEditing={() => { }}
              placeholder={'Nombre'}
              isLeft={true}
              leftIcon={Images.ic_user}
            />
            <InputField
              ref={emailRef}
              value={email}
              marginVertical={6}
              onChangeText={v => setEmail(v)}
              onSubmitEditing={() => { }}
              placeholder={'Correo Electrónico'}
              isLeft={true}
              leftIcon={Images.ic_email}
            />
            <InputField
              ref={passwordRef}
              value={password}
              marginVertical={6}
              onChangeText={v => setPassword(v)}
              onSubmitEditing={() => { }}
              placeholder={'Contraseña'}
              isLeft={true}
              isRight={true}
              leftIcon={Images.ic_lock}
              rightIcon={Images.ic_eye}
              rightType={'password'}
              securePass={true}
            />
            <InputField
              ref={confirmPassRef}
              value={confirPass}
              marginVertical={6}
              onChangeText={v => SetConfirmPass(v)}
              onSubmitEditing={() => { }}
              placeholder={'Confirmar Contraseña'}
              isLeft={true}
              isRight={true}
              leftIcon={Images.ic_lock}
              rightIcon={Images.ic_eye}
              rightType={'password'}
              securePass={true}
            />
            <Text style={{
              textAlign: 'center',
              color: 'red',
              height: verticalScale(30),
            }}>{info}</Text>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              marginTop: verticalScale(-12),
            }}>
            {/* <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <CheckBox
                center
                title="Al crear una cuenta, acepta los Términos de uso y nuestra Política de privacidad."
                checked={check}
                containerStyle={{
                  backgroundColor: null,
                }}
                textStyle={{
                  fontSize: horizontalScale(12),
                  fontFamily: 'RobotoCondensed',
                }}
                onPress={() => setCheck(!check)}
              />
            </View> */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: horizontalScale(20),
            }}>
              <View style={{
                width: '10%',
              }}>

                <CheckBox
                  onClick={() => {
                    setCheck(!check);
                  }}
                  isChecked={check}
                  checkedImage={<Image source={Images.ico_check} style={{
                    width: horizontalScale(23),
                    height: horizontalScale(23),
                    resizeMode: 'contain',
                  }} />}
                  unCheckedImage={<Image source={Images.ico_uncheck} style={{
                    width: horizontalScale(23),
                    height: horizontalScale(23),
                    resizeMode: 'contain',
                  }} />}
                />
              </View>

              <View style={{
                width: '90%',
              }}>
                <Text style={{
                  fontSize: verticalScale(13),
                  textAlign: 'center',
                  fontFamily: 'RobotoCondensed-Regular',
                }}>Al crear una cuenta, acepta los <Text style={{
                  color: '#FF6700',
                  fontFamily: 'RobotoCondensed-Bold',
                }}>Términos de uso</Text> y nuestra <Text style={{ color: '#FF6700', fontFamily: 'RobotoCondensed-Bold', }}>Política de privacidad</Text></Text>
              </View>

            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: horizontalScale(10),
              }}>
              <Text
                style={{
                  fontSize: horizontalScale(12),
                  fontFamily: 'Roboto Condensed',
                }}>
                <Text>¿Ya tienes una cuenta? <Text style={{ color: '#FF6700', fontFamily: 'RobotoCondensed-Bold', }}>Iniciar sesión</Text></Text>
                {/* {'¿Ya tienes una cuenta? Iniciar sesión'} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '80%',
              marginTop: verticalScale(20),
            }}>
            <Button
              label={'SIGUIENTE'}
              onPress={() => {
                // navigation.navigate('Addcar');

                if (userName == '') {
                  console.log('Please input username!');
                  setInfo('Please input username!');
                }
                else if (password == '' && confirPass == '') {
                  console.log('Please input password!');
                  setInfo('Please input password!');
                }
                else if (password != confirPass) {
                  console.log('Please confirm password!');
                  setInfo('Please confirm password!');
                }
                else if (!check) {
                  console.log('please check!');
                  setInfo('Please check!');
                }
                else {
                  auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((data) => {
                      console.log('User account created & signed in!');
                      console.log(data.user.uid);


                      firestore()
                        .collection('users')
                        .doc(data.user.uid)
                        .set({
                          name: userName,
                          email: email,
                          password: password,
                          info: [],
                        })
                        .then(() => {
                          console.log('User added!');
                        });

                      Alert.alert(
                        'Created Successful!',
                        'Created Successful!',
                        [
                          {
                            text: 'OK',
                            onPress: () => navigation.navigate('Splash'),
                          }
                        ]
                      );
                    })
                    .catch(error => {
                      if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        setInfo('That email address is already in use!');
                      }

                      if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        setInfo('The email address is badly formatted!');
                      }

                      if (error.code === 'auth/weak-password') {
                        console.log('Password should be at least 6 characters!');
                        setInfo('Password should be at least 6 characters!');
                      }

                      // console.error(error);
                    });
                }
              }}
            />
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Register;
