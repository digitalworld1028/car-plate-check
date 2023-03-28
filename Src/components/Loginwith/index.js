import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import Images from "../../utils/Images";

const Loginwith = (props) => {
    const {
        icon,
        text,
        bgcolor,
        ...restProps
    } = props;
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: horizontalScale(5),
        }}>
            <View>
                <TouchableOpacity>
                    <View style={{
                        borderColor: '#00C7E5',
                        borderWidth: horizontalScale(1),
                        height: horizontalScale(45),
                        width: horizontalScale(45),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: horizontalScale(5),
                    }}>
                        <Image source={icon} style={{
                            height: horizontalScale(25),
                            width: horizontalScale(25),
                            resizeMode: 'contain',
                        }}></Image>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity {...restProps}>
                    <View style={{
                        borderColor: '#00C7E5',
                        borderWidth: horizontalScale(1),
                        height: horizontalScale(45),
                        width: horizontalScale(245),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: horizontalScale(5),
                    }}>
                        <Text style={{
                            fontWeight: 400,
                            fontSize: horizontalScale(14),
                            alignItems: 'center',
                            fontFamily: 'RobotoCondensed',
                            color: '#00416E',
                        }}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Loginwith;