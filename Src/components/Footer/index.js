import React from "react";
import { View, Image } from 'react-native';
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import Images from "../../utils/Images";

const Footer = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#373736',
            height: verticalScale(50),
            marginTop: verticalScale(5),
        }}>
            <Image source={Images.ico_contact} />
            <Image source={Images.ico_cargar} />
            <Image source={Images.logo_noletter} style={{
                resizeMode: 'contain',
                width: verticalScale(55),
                height: verticalScale(55),
            }} />
            <Image source={Images.ico_perfil} />
            <Image source={Images.ico_service} />
        </View>
    )

}

export default Footer;