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



const Login = ({ navigation }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);

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
                    <View>
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
                    </View>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
                    <View>
                        <Loginwith icon={Images.ico_google} text={'INICIAR SESIÓN CON GOOGLE'} />
                        <Loginwith icon={Images.ico_facebook} text={'INICIAR SESIÓN CON FACEBOOK'} />
                    </View>



                    <View style={{
                        width: '80%',
                        marginBottom: horizontalScale(20),
                    }}>
                        <Button label={'CONTINUAR'} onPress={() => {



                            navigation.navigate('Home');
                            // auth()
                            //     .signInWithEmailAndPassword(email, password)
                            //     .then((userCredential) => {
                            //         // Signed in 
                            //         const user = userCredential.user;
                            //         console.log('singed in!!!');
                            //         console.log(userCredential.user.uid);

                            //         firestore()
                            //             .collection('users')
                            //             .doc(userCredential.user.uid)
                            //             .get()
                            //             .then(documentSnapshot => {
                            //                 console.log('User exists: ', documentSnapshot.exists);

                            //                 if (documentSnapshot.exists) {
                            //                     console.log('User data: ', documentSnapshot.data().name);
                            //                     navigation.navigate('Home', { name: documentSnapshot.data().name });
                            //                 }
                            //             });


                            //         // ...
                            //     })
                            //     .catch((error) => {
                            //         const errorCode = error.code;
                            //         console.log(errorCode)
                            //         const errorMessage = error.message;
                            //         console.log(errorMessage);
                            //     });
                        }} />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>

        </LinearGradient >
    );
};

export default Login;
