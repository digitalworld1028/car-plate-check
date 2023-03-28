import { Image } from '@rneui/base';
import React, { useRef, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale } from '../Metrics';
import { styles } from './styles';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Loginwith from '../../components/Loginwith';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { GoogleSignin } from '@react-native-google-signin/google-signin';



const Login = ({ navigation }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [info, setInfo] = useState('');

    GoogleSignin.configure({
        webClientId: '953066391410-0hgksvf4gmffkvnh327inseol2hosb2a.apps.googleusercontent.com',
      });

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }



    return (
        <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>

            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(700),
                }}
            >
                <SafeAreaView
                    style={styles.container}
                >

                    <View>
                        <Image
                            resizeMode='contain'
                            source={Images.logo2}
                            style={{
                                width: horizontalScale(110),
                                height: verticalScale(155),
                            }}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: horizontalScale(25),
                            fontWeight: 700,
                            fontFamily: 'RobotoCondensed',
                        }}>{'INICIAR SESIÓN'}</Text>
                        <Text
                            style={{
                                fontSize: horizontalScale(18),
                                fontWeight: 300,
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: 'RobotoCondensed',
                            }}
                        >
                            {'Un solo lugar, con toda la información necesaria para estar seguro a la hora de conducir'}
                        </Text>
                    </View>
                    <View style={{
                        width: '100%',
                    }}>
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
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'red',
                            }}
                        >{info}</Text>

                        <View style={{
                            marginTop: horizontalScale(10),
                        }}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: horizontalScale(10),
                            }}>
                                <View style={{
                                    height: horizontalScale(1),
                                    backgroundColor: '#BFBFBF',
                                    width: horizontalScale(70),
                                }}></View>

                                <View>
                                    <Text style={{
                                        fontFamily: 'RobotoCondensed',
                                    }}>Ó, INICIE SESIÓN CON:</Text>
                                </View>

                                <View style={{
                                    height: horizontalScale(1),
                                    backgroundColor: '#BFBFBF',
                                    width: horizontalScale(70),
                                }}></View>
                            </View>
                            <Loginwith icon={Images.ico_google} text={'INICIAR SESIÓN CON GOOGLE'} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
                            <Loginwith icon={Images.ico_facebook} text={'INICIAR SESIÓN CON FACEBOOK'} />
                        </View>
                    </View>





                    <View style={{
                        width: '80%',
                        marginBottom: horizontalScale(20),
                    }}>
                        <Button label={'CONTINUAR'} onPress={() => {

                            if (email == '' || password == '') {
                                console.log('Please input email and password!');
                                setInfo('Please input email and password!');
                            }
                            else {
                                // navigation.navigate('Home');
                                auth()
                                    .signInWithEmailAndPassword(email, password)
                                    .then((userCredential) => {
                                        // Signed in 
                                        const user = userCredential.user;
                                        console.log('singed in!!!');
                                        console.log(userCredential.user.uid);

                                        firestore()
                                            .collection('users')
                                            .doc(userCredential.user.uid)
                                            .get()
                                            .then(documentSnapshot => {
                                                console.log('User exists: ', documentSnapshot.exists);

                                                if (documentSnapshot.exists) {
                                                    console.log('User data: ', documentSnapshot.data().name);
                                                    navigation.navigate('Home', { name: documentSnapshot.data().name });
                                                }
                                            });


                                        // ...
                                    })
                                    .catch((error) => {
                                        if (error.code === 'auth/invalid-email') {
                                            console.log('asdfasfd');
                                            setInfo('The email address is badly fromatted!')
                                        }
                                        if (error.code === 'auth/user-not-found') {
                                            setInfo("The email address doesn't exist!");
                                        }
                                        if (error.code === 'auth/wrong-password') {
                                            setInfo('The password is incorrect!');
                                        }
                                        const errorCode = error.code;
                                        console.log(errorCode)
                                        const errorMessage = error.message;
                                        console.log(errorMessage);
                                    });
                            }




                        }} />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>

        </LinearGradient >
    );
};

export default Login;
