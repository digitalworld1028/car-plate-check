import { Text, View } from 'react-native';
import React from 'react';

import Single from './Single';
import Showtext from './Showtext';

const Info = (props) => {
    const {
        status,
        status1,
        status2,
        status3,
        status4,
        textColor,
    } = props;
    return (
        <View>
            <Showtext status={status} />
            <Single type={'cal'} text1={'SIN PICO Y PLACA'} text2={'HOY LUNES EN BOGOTÁ'} text3={'25-02-2023'} text4={'TODO EL DÍA'} status={status1} />
            <Single type={'cal'} text1={'SOAT'} text2={'VENCIMIENTO:'} text3={'25-02-2023'} text4={'VIGENCIA 8 DÍAS'} status={status2} range={2} firstLine={{color: '#1A1C20'}} />
            <Single type={'cal'} text1={'TECNOMECÁNICA'} text2={'VENCIMIENTO:'} text3={'25-02-2023'} text4={'VIGENCIA 8 DÍAS'} status={status3} range={5} firstLine={{color: '#1A1C20'}} />
            <Single type={'extintor'} text1={'EXTINTOR'} text2={'VENCIMIENTO:'} text3={'25-02-2023'} text4={'VIGENCIA 8 DÍAS'} status={status4}  range={7} firstLine={{color: '#1A1C20'}} />
        </View>
    )
};

export default Info;