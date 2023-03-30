import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { horizontalScale } from "../../screen/Metrics";
import LinearGradient from 'react-native-linear-gradient';

import Images from "../../utils/Images";




const Rangecar = (props) => {

    const {
        range,
    } = props;


    return (
        <LinearGradient colors={['#002337', '#F3401F']} locations={[0, 1]} useAngle={true} angle={90} >
            <View style={{
                height: horizontalScale(5),
                // width: horizontalScale(230),
                justifyContent: 'center',
            }}>
                <Image source={Images.range_car} style={{
                    height: horizontalScale(15),
                    width: horizontalScale(30),
                    resizeMode: 'contain',
                    marginLeft: horizontalScale(16 * range),
                }} />
            </View>
        </LinearGradient>
    );
};

export default Rangecar;