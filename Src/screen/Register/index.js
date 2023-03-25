import React, { useRef, useState } from 'react';

import { Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../../components/InputField';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';

import Button from '../../components/Button';
import { CheckBox, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

  return (
    <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          height: verticalScale(700),
        }}
      >
        <SafeAreaView style={styles.container}>
          <View style={{}}>
            <Image
              resizeMode={'contain'}
              source={Images.logo2}
              style={{
                width: horizontalScale(110),
                height: verticalScale(155),
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: horizontalScale(25),
                fontWeight: 700,
                color: '#1A1C20',
                fontFamily: 'RobotoCondensed',
              }}>
              {'REGISTRARSE'}
            </Text>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: 18,
                fontWeight: 400,
                color: '#1A1C20',
                fontFamily: 'RobotoCondensed',
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
                fontFamily: 'RobotoCondensed',
              }}
            >
              Agrega tu información para acceder a nuestros servicios
            </Text>
          </View>
          <View
            style={{
              width: '100%',
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
              secureTextEntry={true}
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
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Image
            resizeMode={'contain'}
            style={{
              width: horizontalScale(40),
            }}
            source={Images.ic_lock}
          /> */}
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
              {/* <View
            style={{
              flex: 1,
            }}>
            <Text
            style={{
              fontSize: horizontalScale(12),
            }}>
            {
              'Al crear una cuenta, acepta los Términos de uso y nuestra Política de privacidad.'
            }
            </Text>
          </View> */}
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: horizontalScale(12),
                }}>
                  <Text>¿Ya tienes una cuenta? <Text style={{color: '#FF6700'}}>Iniciar sesión</Text></Text>
                {/* {'¿Ya tienes una cuenta? Iniciar sesión'} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '80%',
            }}>
            <Button
              label={'SIGUIENTE'}
              onPress={() => {
                navigation.navigate('Addcar');

                // auth()
                //   .createUserWithEmailAndPassword(email, password)
                //   .then((data) => {
                //     console.log('User account created & signed in!');
                //     console.log(data.user.uid);


                //     firestore()
                //       .collection('users')
                //       .doc(data.user.uid)
                //       .set({
                //         name: userName,
                //         email: email,
                //         password: password,
                //       })
                //       .then(() => {
                //         console.log('User added!');
                //       });

                //     Alert.alert(
                //       'Created Successful!',
                //       'Created Successful!',
                //       [
                //         {
                //           text: 'OK',
                //           onPress: () => navigation.navigate('Splash'),
                //         }
                //       ]
                //     );
                //   })
                //   .catch(error => {
                //     if (error.code === 'auth/email-already-in-use') {
                //       console.log('That email address is already in use!');
                //     }

                //     if (error.code === 'auth/invalid-email') {
                //       console.log('That email address is invalid!');
                //     }

                //     console.error(error);
                //   });
              }}
            />
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Register;
