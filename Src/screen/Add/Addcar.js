import React, { useRef, useState } from 'react';

import { Text, View, Image, TouchableOpacity, ToastAndroid, AlertIOS } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../../components/InputField';
import Images from '../../utils/Images';
import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';

import Button from '../../components/Button';
import SelectType from '../../components/SelectType';
import LinearGradient from 'react-native-linear-gradient';

import DatePicker from 'react-native-modern-datepicker';

import Modal from "react-native-modal";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import firestore from '@react-native-firebase/firestore';

import { useRoute } from "@react-navigation/native";

import Toast from 'react-native-toast-message';



import { styles } from './styles';

const Addcar = ({ navigation }) => {

    const route = useRoute();
    const username = route.params?.username;
    const uid = route.params?.uid;
    console.log(username + uid);

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSoatDate, setSelectedSoatDate] = useState('');
    const [selectedTecnoDate, setSelectedTecnoDate] = useState('');
    const [selectedExtintorDate, setSelectedExtintorDate] = useState('');

    const [isModalVisible, setModalVisible] = useState(false);
    const [isSoatModalVisible, setSoatModalVisible] = useState(false);
    const [isTecnoModalVisible, setTecnoModalVisible] = useState(false);
    const [isExtintorModalVisible, setExtintorModalVisible] = useState(false);


    const toggleSoatModal = () => {
        setSoatModalVisible(!isSoatModalVisible);
    };
    const toggleTecnoModal = () => {
        setTecnoModalVisible(!isTecnoModalVisible);
    };
    const toggleExtintorModal = () => {
        setExtintorModalVisible(!isExtintorModalVisible);
    };


    const plateNumberRef = useRef();
    const typeRef = useRef();
    const distanceRef = useRef();
    const driverIDRef = useRef();
    const soatRef = useRef();
    const tecnoRef = useRef();
    const extintorRef = useRef();


    const [plateNumber, setPlateNumber] = useState('');
    const [type, setType] = useState('');
    const [distance, setDistance] = useState('');
    const [driverID, setDriverID] = useState('');
    const [soat, setSoat] = useState('');
    const [tecno, setTecno] = useState('');
    const [extintor, setExtintor] = useState('');




    return (
        <LinearGradient colors={['rgb(170,170,170)', '#FFFFFF']} locations={[0, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>

            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(800),
                }}
            >
                

                <SafeAreaView style={styles.container}>

                    <Modal
                        isVisible={isSoatModalVisible}
                        onBackdropPress={() => {
                            setSoatModalVisible(false);
                            setSoat(selectedSoatDate);
                        }}
                    >
                        <View style={{}}>
                            <DatePicker
                                onSelectedChange={date => {
                                    setSelectedSoatDate(date);
                                }}
                                mode="calendar"
                            />
                        </View>
                    </Modal>
                    <Modal
                        isVisible={isTecnoModalVisible}
                        onBackdropPress={() => {
                            setTecnoModalVisible(false);
                            setTecno(selectedTecnoDate);
                        }}
                    >
                        <View style={{}}>
                            <DatePicker
                                onSelectedChange={date => {
                                    setSelectedTecnoDate(date);
                                }}
                                mode="calendar"
                            />
                        </View>
                    </Modal>
                    <Modal
                        isVisible={isExtintorModalVisible}
                        onBackdropPress={() => {
                            setExtintorModalVisible(false);
                            setExtintor(selectedExtintorDate);
                        }}
                    >
                        <View style={{}}>
                            <DatePicker
                                onSelectedChange={date => {
                                    setSelectedExtintorDate(date);
                                }}
                                mode="calendar"
                            />
                        </View>
                    </Modal>


                    <View style={{}}>
                        <Image
                            resizeMode={'contain'}
                            source={Images.logo2}
                            style={{
                                width: horizontalScale(110),
                                height: verticalScale(155),
                                marginTop: Platform.OS == 'ios' ? verticalScale(15) : verticalScale(25),
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
                                fontSize: verticalScale(19),
                                color: '#1A1C20',
                                fontFamily: 'RobotoCondensed-Regular',
                                marginTop: verticalScale(5),
                                letterSpacing: verticalScale(3),
                            }}>
                            INFORMACIÓN DEL AUTO
                        </Text>
                        <Text
                            style={{
                                fontWeight: 300,
                                fontSize: verticalScale(16),
                                color: '#1A1C20',
                                width: horizontalScale(270),
                                textAlign: 'center',
                                fontFamily: 'RobotoCondensed-Regular',
                            }}>
                            Complete el siguiente formulario para agregar su automóvil
                        </Text>
                    </View>
                    <View style={{
                        width: '100%',
                        height: verticalScale(1),
                        backgroundColor: '#BFBFBF',
                        marginTop: verticalScale(10),
                    }}></View>
                    <View
                        style={{
                            width: '100%',
                            marginTop: verticalScale(5),
                        }}>

                        <InputField
                            ref={plateNumberRef}
                            value={plateNumber}
                            marginVertical={6}
                            onChangeText={v => setPlateNumber(v)}
                            onSubmitEditing={() => { }}
                            placeholder={'Número de Placa'}
                            isLeft={true}
                            leftIcon={Images.ico_plate}
                        />

                        <SelectType setType={setType} />

                        <InputField
                            ref={distanceRef}
                            value={distance}
                            marginVertical={6}
                            onChangeText={v => setDistance(v)}
                            onSubmitEditing={() => { }}
                            placeholder={'Ingrese el kilometraje de su carro'}
                            isLeft={true}
                            leftIcon={Images.ico_car}
                        />

                        <InputField
                            ref={driverIDRef}
                            value={driverID}
                            marginVertical={6}
                            onChangeText={v => setDriverID(v)}
                            onSubmitEditing={() => { }}
                            placeholder={'Número de la Licencia'}
                            isLeft={true}
                            leftIcon={Images.ico_plate}
                        />

                        <TouchableOpacity
                            onPress={() => {
                                toggleSoatModal();
                            }}
                        >
                            <InputField
                                ref={soatRef}
                                value={soat}
                                marginVertical={6}
                                onChangeText={v => setSoat(v)}
                                onSubmitEditing={() => { }}
                                placeholder={'Fecha del SOAT'}
                                isLeft={true}
                                isRight={true}
                                leftIcon={Images.ico_cal}
                                rightIcon={Images.ico_bottom}
                                rightType={'normal'}
                                editable={false}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                toggleTecnoModal();
                            }}
                        >
                            <InputField
                                ref={tecnoRef}
                                value={tecno}
                                marginVertical={6}
                                onChangeText={v => setTecno(v)}
                                onSubmitEditing={() => { }}
                                placeholder={'Fecha de la Tecnomecánica'}
                                isLeft={true}
                                isRight={true}
                                leftIcon={Images.ico_cal}
                                rightIcon={Images.ico_bottom}
                                rightType={'normal'}
                                editable={false}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                toggleExtintorModal();
                            }}
                        >
                            <InputField
                                ref={extintorRef}
                                value={extintor}
                                marginVertical={6}
                                onChangeText={v => setExtintor(v)}
                                onSubmitEditing={() => { }}
                                placeholder={'Fecha del Extintor'}
                                isLeft={true}
                                isRight={true}
                                leftIcon={Images.ico_cal}
                                rightIcon={Images.ico_bottom}
                                rightType={'normal'}
                                editable={false}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: verticalScale(10),
                        }}>
                        <Button label={'ATRAS'} onPress={() => {
                            navigation.goBack();
                        }} bgColor={'#00416E'} width={115} />
                        <Button
                            label={'SIGUIENTE'}
                            onPress={() => {

                                navigation.navigate('Addother', {
                                    username: username,
                                    uid: uid,
                                    plateNumber: plateNumber,
                                    type: type,
                                    distance: distance,
                                    driverID: driverID,
                                    soat: soat,
                                    tecno: tecno,
                                    extintor: extintor,
                                });
                                
                                // if (plateNumber == '' || type == '' || distance == '' || driverID == '' || soat == '' || tecno == '' || extintor == '') {
                                //     // if (Platform.OS === 'android') {
                                //     //     ToastAndroid.show('Please input all!', ToastAndroid.SHORT)
                                //     // } else {
                                //     //     AlertIOS.alert("Please input all!");
                                //     // }
                                //     console.log('aa');
                                    
                                //     Toast.show({
                                //         type: 'error',
                                //         text1: 'warning',
                                //         text2: 'Please input all!',
                                //     });
                                    
                                // }
                                // else {
                                //     navigation.navigate('Addother', {
                                //         username: username,
                                //         uid: uid,
                                //         plateNumber: plateNumber,
                                //         type: type,
                                //         distance: distance,
                                //         driverID: driverID,
                                //         soat: soat,
                                //         tecno: tecno,
                                //         extintor: extintor,
                                //     });
                                // }



                                // let data = [
                                //     {
                                //         type: 'car',
                                //         plate: 'ABC123',
                                //         city: 'Bogota',
                                //         soat: '2022/05/22',
                                //         tecno: '2023/06/15',
                                //         extintor: '2023/09/16',
                                //     },
                                //     {
                                //         type: 'car',
                                //         plate: 'UIC823',
                                //         city: 'Bogota',
                                //         soat: '2022/05/22',
                                //         tecno: '2023/06/15',
                                //         extintor: '2023/09/16',
                                //     },
                                // ]

                                // firestore()
                                //     .collection('users')
                                //     .doc('Siah9zR1N1aSzsFHlSh9UNoePNa2')
                                //     // .select('info')
                                //     .set({
                                //         info: data
                                //     }, {
                                //         merge: true
                                //     })
                                //     .then(() => {
                                //         console.log('User added!');
                                //     });

                            }}
                            width={165}
                        />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default Addcar;
