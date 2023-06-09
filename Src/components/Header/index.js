import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import Images from "../../utils/Images";
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import { Text } from "@rneui/base";
import auth from '@react-native-firebase/auth';


const Header = (props) => {
    const {
        username,
        navigation,
    } = props;
    return (
        <View style={{
            marginHorizontal: horizontalScale(20),
            height: verticalScale(140),
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: verticalScale(20),
            marginBottom: verticalScale(10),
        }}>
            <Image source={Images.img_car} style={{
                resizeMode: 'cover',
                height: verticalScale(85),
                width: '100%',
            }} />
            <View style={{
                height: verticalScale(55),
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={Images.img_avatar} style={{
                        resizeMode: 'contain',
                        width: verticalScale(72),
                        height: verticalScale(80),
                        marginTop: verticalScale(-25),
                        marginLeft: horizontalScale(15),
                    }} />
                    <View style={{
                        justifyContent: 'center',
                        marginLeft: horizontalScale(20),
                    }}>
                        <Text style={{
                            color: '#393B3E',
                            fontSize: verticalScale(18),
                            fontWeight: 700,
                        }}>{username}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                        }}>
                            <Text style={{
                                fontSize: verticalScale(18),
                                color: '#FF401E',
                                fontWeight: 700,
                                fontFamily: 'RobotoCondensed-Regular',
                            }}>1.000</Text>
                            <Text style={{
                                fontSize: verticalScale(11),
                                color: '#393B3E',
                                fontWeight: 300,
                                fontFamily: 'RobotoCondensed-Regular',
                            }}> PUNTOS</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => {
                        auth().signOut();
                        navigation.navigate('Login');
                    }
                    }>
                        <Image source={Images.ico_signout}
                            style={{
                                width: verticalScale(30),
                                height: verticalScale(30),
                                resizeMode: 'contain',
                                marginRight: horizontalScale(10),
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )


}

export default Header;