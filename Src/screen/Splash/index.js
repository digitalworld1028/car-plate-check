import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { horizontalScale, verticalScale, moderateSacle } from '../Metrics';
import Images from '../../utils/Images';
import { styles } from './styles';
import Button from '../../components/Button';

const Splash = ({ navigation }) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#00c7e50d']} locations={[0.1071, 0.8602]} useAngle={true} angle={163.64} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode={'contain'}
          source={Images.logo1}
          style={{ top: horizontalScale(80) }}
        />
        <View
          style={{
            paddingHorizontal: horizontalScale(70),
            width: '100%',
            marginBottom: horizontalScale(45),
          }}>
          <Button label={'INGRESAR'} navigation={navigation} onPress={() => {
            navigation.navigate('Login');
          }} />

          <Button
            label={'REGISTRARSE'}
            marginVertical={10}
            bgColor={null}
            textColor={'#F3401F'}
            fontSize={17}
            letterSpacing={1}
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Splash;
