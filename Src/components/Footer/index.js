import React from "react";
import { View, Image } from 'react-native';
import { horizontalScale } from "../../screen/Metrics";
import Images from "../../utils/Images";

const Footer = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#002337',
            height: horizontalScale(50),
            marginTop: horizontalScale(5),
        }}>
            <Image source={Images.ico_contact} />
            <Image source={Images.ico_cargar} />
            <Image source={Images.logo2} style={{
                resizeMode: 'contain',
                width: horizontalScale(45),
                height: horizontalScale(45),
            }} />
            <Image source={Images.ico_perfil} />
            <Image source={Images.ico_service} />
        </View>
    )

}

export default Footer;