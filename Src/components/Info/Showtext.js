import React from "react";
import { Text, View } from "react-native";
import { horizontalScale, verticalScale } from "../../screen/Metrics";
import { styles } from "./styles";

const Showtext = (props) => {

    const {
        status
    } = props;

    return (
        <View style={{
            width: horizontalScale(295),
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: verticalScale(10),
        }}>
            {status == 'good' && <Text style={styles.font}>Puedes transitar, no tienes inconvenientes,
                tu SOAT y Tecnomecánica siguen vigentes.</Text>}
            {status == 'danger' && <Text style={styles.font}>NO puedes transitar, tienes inconvenientes con algunos de los siguientes items</Text>}
            {status == 'warning' && <Text style={styles.font}>Tienes una alerta, puedes transitar pero con precaución, tu SOAT y Tecnomecánica siguen vigentes.</Text>}
            <View style={{
                width: '100%',
                height: horizontalScale(1),
                backgroundColor: '#BFBFBF',
                marginTop: horizontalScale(10),
            }}></View>
        </View>
    );
};

 

export default Showtext;