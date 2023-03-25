import React, { useState, useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, ScrollView, } from 'react-native';
import { horizontalScale } from '../Metrics';
import LinearGradient from 'react-native-linear-gradient';

import { useRoute } from "@react-navigation/native";

import Plate from '../../components/Plate';
import Info from '../../components/Info';

import Accordion from '../../components/Accordion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from './styles';


const getAccordionItems = () => ([
  {
    id: 1,
    title: <Plate type={'car'} platenumber={'ABC123'} city={'Bogota'} status={'good'} />,
    content: <Info status={'good'} status1={'good'} status2={'good'} status3={'good'} status4={'good'} />,
  },
  {
    id: 2,
    title: <Plate type={'car'} platenumber={'IEO895'} city={'Bogota'} status={'danger'} />,
    content: <Info status={'danger'} status1={'danger'} status2={'danger'} status3={'good'} status4={'good'} />,
  },
  {
    id: 3,
    title: <Plate type={'car'} platenumber={'ABC123'} city={'Bogota'} status={'warning'} />,
    content: <Info status={'good'} status1={'good'} status2={'good'} status3={'good'} status4={'good'} />,
  },

])


const Home = ({ navigation }) => {
  const accordionList = getAccordionItems();
  const [isExpanded, setIsExpanded] = useState(0);


  const route = useRoute()
  const username = route.params?.name;
  console.log(username);




  return (
    <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
      <SafeAreaView style={{
        height: '100%',
      }}>
        <Header username={username} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginHorizontal: horizontalScale(20),
            // marginTop: horizontalScale(10),
            // height: horizontalScale(440),
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderColor: '#E1E1E1',
            borderWidth: horizontalScale(0.5),
            backgroundColor: '#F7F7F7',
          }}
        >

          {accordionList.map((item, index) => (
            <Accordion onPress={() => {
              if (isExpanded === index) {
                setIsExpanded(accordionList.size)
              } else {
                setIsExpanded(index)
              }
            }} title={item.title} isCollapsed={isExpanded === index} accordionRender={
              <View>
                {item.content}
              </View>
            } key={item.id} />
          ))}

          {/* <Plate type={'car'} platenumber={'ABC123'} city={'Bogota'} status={'good'} />
      <Plate type={'car'} platenumber={'ABC123'} city={'Bogota'} status={'danger'} />
      <Plate type={'car'} platenumber={'ABC123'} city={'Bogota'} status={'warning'} /> */}



          {/* <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',

          borderColor: 'black',
          borderWidth: 1,
        }}>

        </View> */}



          {/* <Info /> */}


        </ScrollView>
        <Footer />
      </SafeAreaView>
    </LinearGradient>
  );
};


export default Home;
