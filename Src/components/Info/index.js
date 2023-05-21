import { Text, View } from 'react-native';
import React from 'react';

import Single from './Single';
import Showtext from './Showtext';

const Info = (props) => {
    const {
        type,
        status,
        status1,
        status2,
        status3,
        status4,
        current,
        soat,
        tecno,
        extintor,
        range2,
        range3,
        range4,
        textColor,
    } = props;


    return (
        <View>
            <Showtext status={status} />
            <Single type={'cal'} text1={'SIN PICO Y PLACA'} text2={'HOY LUNES EN BOGOTÁ'} text3={current} text4={'TODO EL DÍA'} status={status1} />
            <Single type={'cal'} text1={'SOAT'} text2={'VENCIMIENTO:'} text3={soat} text4={range2 >= 0 ? 'VIGENCIA ' + (10 - range2) + ' DÍAS' : (-range2) + ' DÍAS VENCIDO'} status={status2} range={range2} firstLine={{ color: '#1A1C20' }} />
            <Single type={'cal'} text1={'TECNOMECÁNICA'} text2={'VENCIMIENTO:'} text3={tecno} text4={range3 >= 0 ? 'VIGENCIA ' + (10 - range3) + ' DÍAS' : (-range3) + ' DÍAS VENCIDO'} status={status3} range={range3} firstLine={{ color: '#1A1C20' }} />
            {type !== 'motorcycle' && <Single type={'extintor'} text1={'EXTINTOR'} text2={'VENCIMIENTO:'} text3={extintor} text4={range4 >= 0 ? 'VIGENCIA ' + (10 - range4) + ' DÍAS' : (-range4) + ' DÍAS VENCIDO'} status={status4} range={range4} firstLine={{ color: '#1A1C20' }} />}
        </View>
    )
};

export default Info;