import React from "react";
import { View, Image } from 'react-native';
import Images from "../../utils/Images";
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import { Text } from "@rneui/base";


const Header = (props) => {
    const {
        username
    } = props;
    return (
        <View style={{
            marginHorizontal: horizontalScale(20),
            height: horizontalScale(140),
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: horizontalScale(20),
            marginBottom: horizontalScale(10),
        }}>
            <Image source={Images.img_car} style={{
                resizeMode: 'contain',
                height: horizontalScale(85),
                width: '100%',
            }} />
            <View style={{
                height: horizontalScale(55),
                flexDirection: 'row',
                width: '100%',
            }}>
                <Image source={Images.img_avatar} style={{
                    resizeMode: 'contain',
                    width: horizontalScale(72),
                    height: horizontalScale(80),
                    marginTop: horizontalScale(-25),
                    marginLeft: horizontalScale(15),
                }} />
                <View style={{
                    justifyContent: 'center',
                    marginLeft: horizontalScale(20),
                }}>
                    <Text style={{
                        color: '#393B3E',
                        fontSize: horizontalScale(18),
                        fontWeight: 700,
                    }}>{'Antonio Castro'}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                    }}>
                        <Text style={{
                            fontSize: horizontalScale(18),
                            color: '#FF401E',
                            fontWeight: 700,
                            fontFamily: 'RobotoCondensed',
                        }}>1.000</Text>
                        <Text style={{
                            fontSize: horizontalScale(10),
                            color: '#393B3E',
                            fontWeight: 300,
                            fontFamily: 'RobotoCondensed',
                        }}> PUNTOS</Text>
                    </View>
                </View>
            </View>
        </View>
    )


}

export default Header;