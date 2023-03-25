import React, { useRef, useState } from 'react';

import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../../components/InputField';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';

import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



import { styles } from './styles';

const Addother = ({ navigation }) => {

    ///////////////////////////////////////////////
    const departmentRef = useRef();
    const cityRef = useRef();


    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');




    return (
        <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(800),
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
                                }}
                            />
                        </View>
                        <View style={{
                            height: horizontalScale(450),
                        }}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginTop: horizontalScale(20),
                                }}>
                                <Text
                                    style={{
                                        fontStyle: 'normal',
                                        fontSize: 18,
                                        fontWeight: 400,
                                        color: '#1A1C20',
                                        fontFamily: 'RobotoCondensed',
                                    }}>
                                    LOCALIZACIÓN
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 300,
                                        fontSize: 18,
                                        color: '#1A1C20',
                                        width: horizontalScale(270),
                                        textAlign: 'center',
                                        fontFamily: 'RobotoCondensed',
                                    }}>
                                    Complete el siguiente formulario para agregar su localización
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: horizontalScale(20),
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
                            }}>
                            <Button label={'ATRAS'} onPress={() => {
                                navigation.navigate('Addcar');
                            }} bgColor={'#00416E'} width={115} />
                            <Button label={'SIGUIENTE'} onPress={() => {
                                navigation.navigate('Autocarousel')
                            }} width={165} />
                        </View>
                    </SafeAreaView>
                </KeyboardAwareScrollView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default Addother;
