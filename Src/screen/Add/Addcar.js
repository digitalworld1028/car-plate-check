import React, { useRef, useState } from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';
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


import { styles } from './styles';

const Addcar = ({ navigation }) => {

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
    const driverIDRef = useRef();
    const soatRef = useRef();
    const tecnoRef = useRef();
    const extintorRef = useRef();


    const [plateNumber, setPlateNumber] = useState('');
    const [type, setType] = useState('');
    const [driverID, setDriverID] = useState('');
    const [soat, setSoat] = useState('');
    const [tecno, setTecno] = useState('');
    const [extintor, setExtintor] = useState('');




    return (
        <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>

            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: verticalScale(700),
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
                                    console.log(selectedSoatDate);
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
                                    console.log(selectedTecnoDate);
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
                                    console.log(selectedTecnoDate);
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
                                fontSize: 18,
                                fontWeight: 400,
                                color: '#1A1C20',
                                fontFamily: 'RobotoCondensed',
                            }}>
                            INFORMACIÓN DEL AUTO
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
                            Complete el siguiente formulario para agregar su automóvil
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
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

                        <SelectType />

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
                                console.log('pressed!!');
                                toggleSoatModal();
                                console.log(isSoatModalVisible);
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
                                editable={false}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                console.log('pressed!!');
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
                                editable={false}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                console.log('pressed!!');
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
                                editable={false}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Button label={'ATRAS'} onPress={() => {
                            navigation.navigate('Register');
                        }} bgColor={'#00416E'} width={115} />
                        <Button label={'SIGUIENTE'} onPress={() => {
                            navigation.navigate('Addother');
                        }} width={165} />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default Addcar;
