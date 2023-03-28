import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../screen/Metrics';
import Images from '../../utils/Images';

import { styles } from './styles';
import Rangecar from './Rangecar';


const Single = (props) => {

    const {
        type,
        text1,
        text2,
        text3,
        text4,
        status,
        range,
        firstLine,
    } = props;
    return (
        <View style={{
            // marginVertical: horizontalScale(5),
        }}>
            <View style={{
                flexDirection: 'row',
                height: verticalScale(85),
                width: horizontalScale(295),
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View style={{
                    height: verticalScale(90),
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: horizontalScale(220),
                        height: verticalScale(70),
                    }}>
                        {/* <Image source={Images.ic_cal} style={{
                            width: horizontalScale(35),
                            height: horizontalScale(35),
                        }} /> */}
                        {type === 'cal' && <Image source={Images.ic_cal} style={{
                            width: verticalScale(33),
                            height: verticalScale(33),
                        }} />}
                        {type === 'extintor' && <Image source={Images.ic_extintor} style={{
                            width: verticalScale(30),
                            height: verticalScale(42),
                        }} />}

                        <View style={{
                            flexDirection: 'column',
                            marginLeft: horizontalScale(15),
                            justifyContent: 'space-around',
                        }}>
                            <Text style={{
                                fontSize: verticalScale(18),
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 700,
                                ...styles[status],
                                ...firstLine,
                            }}>{text1}</Text>
                            <Text style={{
                                fontSize: verticalScale(10),
                                fontFamily: 'Roboto Condensed',
                            }}>{text2}</Text>
                            <Text style={{
                                fontSize: verticalScale(18),
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 700,
                                color: '#1A1C20',
                            }}>{text3}</Text>
                            <Text style={{
                                fontSize: verticalScale(15),
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 700,
                                ...styles[status],
                            }}>{text4}</Text>
                        </View>
                    </View>

                    { range && <Rangecar range={range} />}
                                           

                </View>
                <View style={{
                    width: horizontalScale(1),
                    height: verticalScale(70),
                    backgroundColor: '#BFBFBF',
                }}></View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {status === 'good' && <Image source={Images.ic_good_check} />}
                    {status === 'danger' && <Image source={Images.ic_danger_check} />}
                    {status === 'warning' && <Image source={Images.ic_warning_check} />}
                </View>
            </View>
            <View style={{
                height: verticalScale(1),
                backgroundColor: '#BFBFBF',
                marginTop: verticalScale(5),
            }}></View>
        </View>
    );
}

export default Single;