import React from "react";
import { View, Image, Platform, TouchableOpacity } from 'react-native';
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import Images from "../../utils/Images";

const Footer = (props) => {
    const {
        navigation,
        uid,
    } = props;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#373736',
            height: Platform.OS == 'ios' ? verticalScale(55) : verticalScale(50),
            marginTop: verticalScale(5),
        }}>
            <Image source={Images.ico_contact} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Addcar', {
                    uid: uid,
                })}
            >
                <Image source={Images.ico_cargar} />
            </TouchableOpacity>
            <Image
                source={Images.logo_noletter}
                style={{
                    resizeMode: 'contain',
                    width: verticalScale(50),
                    height: verticalScale(50),
                }}
            />
            <Image source={Images.ico_perfil} />
            <Image source={Images.ico_service} />
        </View>
    )

}

export default Footer;