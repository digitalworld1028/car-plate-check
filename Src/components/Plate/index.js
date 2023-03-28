import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
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
        clickedId,
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
                width: verticalScale(95),
                height: verticalScale(95),
                borderColor: '#CDCDCD',
                borderWidth: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: verticalScale(3),
                paddingTop: verticalScale(22),
                paddingBottom: verticalScale(9),
            }}>
                <Image source={Images.ic_car} style={{
                    resizeMode: 'cover',
                    width: verticalScale(70),
                    height: verticalScale(47),
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
                    height: verticalScale(91),
                    width: horizontalScale(198),
                    flexDirection: 'column',
                    borderRadius: horizontalScale(3),
                    // justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '100%',
                        paddingTop: verticalScale(3),
                        paddingLeft: horizontalScale(181),
                        height: verticalScale(17),
                    }}>
                        <TouchableOpacity onPress={() => console.log('delete click!!')}>
                            <Image source={Images.ic_delete} resizeMode={'contain'} style={{
                                width: verticalScale(14),
                                height: verticalScale(14),
                            }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%',
                        // paddingHorizontal: horizontalScale(10),
                        alignItems: 'center',
                        height: verticalScale(55),
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: verticalScale(50),
                            marginTop: verticalScale(-10),
                            fontFamily: 'RobotoCondensed-Bold',
                        }}>
                            {platenumber.substr(0, 3) + '•' + platenumber.substr(3, 6)}
                        </Text>
                    </View>
                    <View style={{
                        marginBottom: 0,
                        flexDirection: 'row',
                        height: verticalScale(21),
                    }}>
                        <View style={{
                            width: horizontalScale(35),
                            alignItems: 'center',
                        }}>
                            {status === 'danger' &&
                                <Image
                                    source={Images.ic_danger}
                                    style={{
                                        width: verticalScale(18),
                                        height: verticalScale(18),
                                        resizeMode: 'contain'
                                    }}
                                />}
                            {status === 'warning' && <Image source={Images.ic_warning} style={{
                                width: verticalScale(18),
                                height: verticalScale(18),
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
                                fontSize: verticalScale(14),
                                fontFamily: 'RobotoCondensed-Regular'
                            }}>{city}</Text>
                        </View>
                        <View style={{
                            width: horizontalScale(35),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {clickedId && <Image
                                source={Images.ico_up}
                                style={{
                                    width: verticalScale(18),
                                    height: verticalScale(18),
                                    resizeMode: 'contain'
                                }}
                            />}
                            {!clickedId && <Image
                                source={Images.ico_down}
                                style={{
                                    width: verticalScale(18),
                                    height: verticalScale(18),
                                    resizeMode: 'contain'
                                }}
                            />}
                            {/* <Image
                                source={Images.ico_down}
                                style={{
                                    width: horizontalScale(18),
                                    height: horizontalScale(18),
                                    resizeMode: 'contain'
                                }}
                            /> */}
                        </View>
                    </View>
                </View>
                <View style={{
                    height: verticalScale(2),
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
                    height: verticalScale(2),
                    ...styles[status],
                }}></View>
            </View>
        </View >
    );


};

export default Plate;