import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import Images from "../../utils/Images";

const Loginwith = (props) => {
    const {
        icon,
        text,
        bgcolor,
        borderColor,
        ...restProps
    } = props;
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(5),
        }}>
            <View>
                <TouchableOpacity>
                    <View style={{
                        borderColor: borderColor,
                        borderWidth: verticalScale(1),
                        height: verticalScale(45),
                        width: verticalScale(45),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: verticalScale(5),
                    }}>
                        <Image source={icon} style={{
                            height: verticalScale(25),
                            width: verticalScale(25),
                            resizeMode: 'contain',
                        }}></Image>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity {...restProps}>
                    <View style={{
                        borderColor: borderColor,
                        borderWidth: verticalScale(1),
                        height: verticalScale(45),
                        width: horizontalScale(245),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: verticalScale(5),
                        backgroundColor: bgcolor,
                    }}>
                        <Text style={{
                            fontWeight: 400,
                            fontSize: verticalScale(16),
                            alignItems: 'center',
                            fontFamily: 'RobotoCondensed-Regular',
                            color: '#00416E',
                        }}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Loginwith;