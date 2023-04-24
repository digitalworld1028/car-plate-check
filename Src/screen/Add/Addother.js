import React, { useRef, useState } from 'react';

import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../../components/InputField';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';

import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useRoute } from "@react-navigation/native";

import firestore from '@react-native-firebase/firestore';

import { styles } from './styles';

const Addother = ({ navigation }) => {

    ///////////////////////////////////////////////
    const departmentRef = useRef();
    const cityRef = useRef();


    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');


    const route = useRoute();
    const uid = route.params?.uid;

    const plateNumber = route.params?.plateNumber;
    const type = route.params?.type;
    const distance = route.params?.distance;
    const driverID = route.params?.driverID;
    const soat = route.params?.soat;
    const tecno = route.params?.tecno;
    const extintor = route.params?.extintor;




    return (
        <LinearGradient colors={['rgb(170,170,170)', '#FFFFFF']} locations={[0, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(795),
                }}
            >
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        height: verticalScale(700),
                    }}
                >
                    <SafeAreaView style={styles.container1}>
                        <View style={{}}>
                            <Image
                                resizeMode={'contain'}
                                source={Images.logo2}
                                style={{
                                    width: horizontalScale(110),
                                    height: verticalScale(155),
                                    marginTop: verticalScale(40),
                                }}
                            />
                        </View>
                        <View style={{
                            // height: horizontalScale(450),
                            marginTop: verticalScale(20),
                        }}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginTop: horizontalScale(20),
                                }}>
                                <Text
                                    style={{
                                        fontStyle: 'normal',
                                        fontSize: verticalScale(20),
                                        fontWeight: 400,
                                        color: '#1A1C20',
                                        fontFamily: 'RobotoCondensed-Regular',
                                        letterSpacing: verticalScale(4),
                                    }}>
                                    LOCALIZACIÓN
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 300,
                                        fontSize: verticalScale(18),
                                        color: '#1A1C20',
                                        width: horizontalScale(270),
                                        textAlign: 'center',
                                        fontFamily: 'RobotoCondensed-Regular',
                                    }}>
                                    Complete el siguiente formulario para agregar su localización
                                </Text>
                                <View style={{
                                    width: '100%',
                                    height: verticalScale(1),
                                    backgroundColor: '#BFBFBF',
                                    marginTop: verticalScale(16),
                                }}></View>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: horizontalScale(10),
                                }}>

                                <InputField
                                    ref={departmentRef}
                                    value={department}
                                    marginVertical={6}
                                    onChangeText={v => setDepartment(v)}
                                    onSubmitEditing={() => { }}
                                    placeholder={'Departamento'}
                                    isLeft={true}
                                    leftIcon={Images.ico_location}
                                />
                                <InputField
                                    ref={cityRef}
                                    value={city}
                                    marginVertical={6}
                                    onChangeText={v => setCity(v)}
                                    onSubmitEditing={() => { }}
                                    placeholder={'Ciudad'}
                                    isLeft={true}
                                    leftIcon={Images.ico_location}
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: Platform.OS == 'ios' ? verticalScale(248) : verticalScale(256),
                            }}>
                            <Button label={'ATRAS'} onPress={() => {
                                navigation.navigate('Addcar');
                            }} bgColor={'#00416E'} width={115} />
                            <Button label={'SIGUIENTE'} onPress={() => {
                                console.log(department);
                                console.log(city);
                                // navigation.navigate('Autocarousel');

                                let data = {
                                    type: type,
                                    plateNumber: plateNumber,
                                    distance: distance,
                                    driverID: driverID,
                                    department: department,
                                    city: city,
                                    soat: soat,
                                    tecno: tecno,
                                    extintor: extintor,
                                };
                                firestore()
                                    .collection('users')
                                    .doc(uid)
                                    .get()
                                    .then(documentSnapshot => {
                                        console.log('User exists: ', documentSnapshot.exists);

                                        if (documentSnapshot.exists) {
                                            console.log('User data: ', documentSnapshot.data());
                                            let olddata = documentSnapshot.data().info;
                                            olddata.push(data);
                                            console.log(olddata);


                                            firestore()
                                                .collection('users')
                                                .doc(uid)
                                                .set({
                                                    info: olddata
                                                }, {
                                                    merge: true
                                                })
                                                .then(() => {
                                                    console.log('User added!');

                                                    navigation.navigate('Home', {
                                                        uid: uid,
                                                    });

                                                    // firestore()
                                                    //     .collection('users')
                                                    //     .doc(uid)
                                                    //     .get()
                                                    //     .then(documentSnapshot => {
                                                    //         console.log('User exists: ', documentSnapshot.exists);

                                                    //         if (documentSnapshot.exists) {
                                                    //             console.log('User uid: ', uid);
                                                    //             navigation.navigate('Home', {
                                                    //                 uid: uid,
                                                    //             });
                                                    //         }
                                                    //     });
                                                });

                                            // navigation.navigate('Home', {
                                            //     username: username,
                                            //     uid: uid,
                                            //     info: olddata,
                                            // });

                                            // firestore()
                                            //     .collection('users')
                                            //     .doc(uid)
                                            //     .get()
                                            //     .then(documentSnapshot => {
                                            //         console.log('User exists: ', documentSnapshot.exists.data().info);

                                            //         if (documentSnapshot.exists) {
                                            //             console.log('User data: ', username);
                                            //             console.log('User uid: ', uid);
                                            //             navigation.navigate('Home', {
                                            //                 username: username,
                                            //                 uid: uid,
                                            //                 info: documentSnapshot.data().info,
                                            //             });
                                            //         }
                                            //     });
                                        }
                                    });





                                // navigation.navigate('Home', {
                                //     uid: uid,
                                //     username: username,
                                // });
                            }} width={165} />
                        </View>
                    </SafeAreaView>
                </KeyboardAwareScrollView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default Addother;
