import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import Images from '../../utils/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        <LinearGradient colors={['rgb(170,170,170)', '#FFFFFF']} locations={[0, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(750),
                }}
            >

                <SafeAreaView style={styles.container}>

                    <View style={{
                    }}>
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

                    <View style={{
                        alignItems: 'center',
                        width: horizontalScale(245),
                        marginTop: verticalScale(35),
                    }}>
                        <Text style={{
                            fontSize: verticalScale(25),
                            fontFamily: 'RobotoCondensed-Bold',
                            color: '#1A1C20',
                        }}>{'INICIAR SESIÓN'}</Text>
                        <Text
                            style={{
                                fontSize: verticalScale(17),
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: 'RobotoCondensed-Regular',
                                color: '#1A1C20',
                                lineHeight: verticalScale(18),
                                marginTop: verticalScale(10),
                            }}
                        >
                            {'Un solo lugar, con toda la información necesaria para estar seguro a la hora de conducir'}
                        </Text>
                    </View>

                    <View style={{
                        height: horizontalScale(1),
                        width: '100%',
                        backgroundColor: '#BFBFBF',
                        marginTop: verticalScale(15),
                    }}></View>

                    <View style={{
                        width: '100%',
                        marginTop: verticalScale(10),
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
                                        fontFamily: 'RobotoCondensed-Regular',
                                    }}>Ó, INICIE SESIÓN CON:</Text>
                                </View>

                                <View style={{
                                    height: horizontalScale(1),
                                    backgroundColor: '#BFBFBF',
                                    width: horizontalScale(70),
                                }}></View>
                            </View>
                            <Loginwith icon={Images.ico_google} text={'INICIAR SESIÓN CON GOOGLE'} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} bgcolor={'rgba(0, 199, 229, 0.1)'} borderColor={'#00C7E5'} />
                            <Loginwith icon={Images.ico_facebook} text={'INICIAR SESIÓN CON FACEBOOK'} bgcolor={'rgba(18, 120, 243, 0.1)'} borderColor={'#1278F3'} />
                        </View>
                    </View>

                    <View style={{
                        width: '80%',
                        marginTop: verticalScale(55),
                        alignItems: 'center',
                    }}>
                        <Button label={'CONTINUAR'} onPress={() => {
                            // navigation.navigate('Home');

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

                                        navigation.navigate('Home', {
                                            uid: userCredential.user.uid,
                                        });

                                        // firestore()
                                        //     .collection('users')
                                        //     .doc(userCredential.user.uid)
                                        //     .get()
                                        //     .then(documentSnapshot => {
                                        //         console.log('User exists: ', documentSnapshot.exists);

                                        //         if (documentSnapshot.exists) {
                                        //             console.log('User data: ', documentSnapshot.data().name);
                                        //             console.log('User uid: ', userCredential.user.uid);
                                        //             navigation.navigate('Home', {
                                        //                 username: documentSnapshot.data().name,
                                        //                 uid: userCredential.user.uid,
                                        //                 info: documentSnapshot.data().info,
                                        //             });
                                        //         }
                                        //     });


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
