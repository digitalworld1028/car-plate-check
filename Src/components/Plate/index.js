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
        distance,
        ...restOfProps
    } = props;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginVertical: horizontalScale(2),
            paddingTop: horizontalScale(10),
            // width: '100%',
            width: horizontalScale(295),
            alignItems: 'center',
        }}>
            <View style={{
                width: horizontalScale(95),
                height: verticalScale(95),
                flexDirection: 'column',
                justifyContent: 'space-between',
                // alignItems: 'center',

            }}>
                <View style={{
                    height: verticalScale(71),
                    width: horizontalScale(95),
                    borderColor: '#CDCDCD',
                    borderWidth: 1,
                    borderRadius: verticalScale(3),
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: verticalScale(13),
                }}>
                    <View>
                        <Image source={Images.ic_car} style={{
                            width: horizontalScale(52),
                            height: verticalScale(37),
                            resizeMode: 'contain',
                        }}>
                        </Image>
                    </View>
                    <View>
                        <Text style={{
                            color: 'black',
                            fontSize: verticalScale(12),
                        }}>{'+ TU AUTO'}</Text>
                    </View>
                </View>
                <View style={{
                    height: verticalScale(22),
                    width: horizontalScale(95),
                    backgroundColor: '#FB6900',
                }}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'RobotoCondensed-Bold',
                        textAlign: 'center',
                        letterSpacing: verticalScale(1),
                    }}><Text style={{fontSize: verticalScale(16)}}>{distance}</Text><Text style={{fontSize: verticalScale(12),}}> Km</Text></Text>
                </View>
            </View>
            <View style={{ width: horizontalScale(2) }}>
            </View>
            <View style={{
                flexDirection: 'column',
                // height: horizontalScale(90),
            }}>
                <View style={{
                    backgroundColor: '#373736',
                    height: verticalScale(91),
                    width: horizontalScale(198),
                    flexDirection: 'column',
                    borderRadius: horizontalScale(3),
                    // justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '100%',
                        paddingTop: verticalScale(3),
                        paddingLeft: horizontalScale(180),
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
                            marginTop: verticalScale(-5),
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
                            backgroundColor: '#737372',
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
                        backgroundColor: '#737372',
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
                    backgroundColor: '#737372',
                }}></View>
            </View>
        </View >
    );


};

export default Plate;