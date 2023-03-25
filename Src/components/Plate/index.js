import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { horizontalScale, verticalScale } from '../../screen/Metrics';
import { AccordionList } from "accordion-collapse-react-native";
import { Separator } from 'native-base';


import Images from '../../utils/Images';
import { styles } from './styles';


const Plate = props => {
    const {
        type,
        platenumber,
        city,
        status,
        ...restOfProps
    } = props;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginVertical: horizontalScale(2),
            paddingTop: horizontalScale(10),
        }}>
            <View style={{
                width: horizontalScale(95),
                height: horizontalScale(95),
                borderColor: '#CDCDCD',
                borderWidth: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: horizontalScale(3),
                paddingTop: horizontalScale(22),
                paddingBottom: horizontalScale(9),
            }}>
                <Image source={Images.ic_car} style={{
                    width: horizontalScale(70),
                    height: horizontalScale(47),
                    resizeMode: 'contain',
                }}>
                </Image>
                <Text>{'+ TU AUTO'}</Text>
            </View>
            <View style={{ width: horizontalScale(2) }}>
            </View>
            <View style={{
                flexDirection: 'column',
                // height: horizontalScale(90),
            }}>
                <View style={{
                    backgroundColor: '#00416E',
                    height: horizontalScale(92),
                    width: horizontalScale(198),
                    flexDirection: 'column',
                    borderRadius: horizontalScale(3),
                    // justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '100%',
                        paddingTop: horizontalScale(3),
                        paddingLeft: horizontalScale(181),
                        height: horizontalScale(17),
                    }}>
                        <Image source={Images.ic_delete} resizeMode={'contain'} style={{
                            width: horizontalScale(14),
                            height: horizontalScale(14),
                        }} />
                    </View>
                    <View style={{
                        width: '100%',
                        // paddingHorizontal: horizontalScale(10),
                        alignItems: 'center',
                        height: horizontalScale(55),
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: horizontalScale(42),
                            fontWeight: 700,
                            marginTop: horizontalScale(-5),
                        }}>
                            {platenumber.substr(0, 3) + '•' + platenumber.substr(3, 6)}
                        </Text>
                    </View>
                    <View style={{
                        marginBottom: 0,
                        flexDirection: 'row',
                        height: horizontalScale(21),
                    }}>
                        <View style={{
                            width: horizontalScale(35),
                            alignItems: 'center',
                        }}>
                            {status === 'danger' &&
                                <Image
                                    source={Images.ic_danger}
                                    style={{
                                        width: horizontalScale(18),
                                        height: horizontalScale(18),
                                        resizeMode: 'contain'
                                    }}
                                />}
                            {status === 'warning' && <Image source={Images.ic_warning} style={{
                                width: horizontalScale(18),
                                height: horizontalScale(18),
                                resizeMode: 'contain'
                            }} />}

                        </View>
                        <View style={{
                            width: horizontalScale(128),
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...styles[status],
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: horizontalScale(14),
                                fontWeight: 300,
                            }}>{city}</Text>
                        </View>
                        <View style={{
                            width: horizontalScale(35),
                        }}>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: horizontalScale(2),
                    width: '100%',
                    flexDirection: 'row',
                }}>
                    <View style={{
                        width: horizontalScale(35),
                    }}>
                    </View>
                    <View style={{
                        width: horizontalScale(128),
                        ...styles[status],
                    }}>
                    </View>
                    <View style={{
                        width: horizontalScale(35),
                    }}>
                    </View>
                </View>
                <View style={{
                    height: horizontalScale(2),
                    ...styles[status],
                }}></View>
            </View>
        </View >
    );


};

export default Plate;