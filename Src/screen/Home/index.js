import React, { useState, useLayoutEffect, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { horizontalScale, verticalScale } from '../Metrics';
import LinearGradient from 'react-native-linear-gradient';

import { useRoute } from "@react-navigation/native";

import Plate from '../../components/Plate';
import Info from '../../components/Info';

import Accordion from '../../components/Accordion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from './styles';
import Images from '../../utils/Images';


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

const accordionData = [
  {
    id: 1,
    title: {
      type: 'car',
      platenumber: 'ABC123',
      city: 'Bogota',
      status: 'good',
    },
    content: {
      status: 'good',
      status1: 'good',
      status2: 'good',
      status3: 'good',
      status4: 'good',
    }
  },
  {
    id: 2,
    title: {
      type: 'car',
      platenumber: 'IEO895',
      city: 'Bogota',
      status: 'danger',
    },
    content: {
      status: 'danger',
      status1: 'danger',
      status2: 'danger',
      status3: 'good',
      status4: 'good',
    }
  },
  {
    id: 3,
    title: {
      type: 'car',
      platenumber: 'IEO895',
      city: 'Bogota',
      status: 'warning',
    },
    content: {
      status: 'good',
      status1: 'good',
      status2: 'good',
      status3: 'good',
      status4: 'good',
    }
  }
]


const Home = ({ navigation }) => {
  const accordionList = getAccordionItems();
  const [isExpanded, setIsExpanded] = useState(0);
  const [current, setCurrent] = useState();

  const route = useRoute();
  const username = route.params?.username;
  const uid = route.params?.uid;
  const info = route.params?.info;

  // useEffect(() => {
  //   fetch('https://worldtimeapi.org/api/timezone/America/Bogota')
  //   .then((resp) => resp.json())
  //   .then((json) => setCurrent(json.datetime))
  //   .catch((error) => console.error(error));
  //   console.log(current);
  // }, []);

  




  return (
    <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
      <SafeAreaView style={{
        height: '100%',
      }}>
        <Header username={username} navigation={navigation} uid={uid} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginHorizontal: horizontalScale(20),
            // marginTop: horizontalScale(10),
            // height: horizontalScale(300),
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderColor: '#E1E1E1',
            borderWidth: verticalScale(1),
            backgroundColor: '#F7F7F7',
          }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: horizontalScale(6),
          }}>
            <Image source={Images.ico_marker} style={{
              width: verticalScale(8),
              height: verticalScale(11),
              resizeMode: 'contain',
            }}
            />
            <Text style={{
              marginLeft: horizontalScale(10),
              fontSize: verticalScale(13),
            }}>ESTÁS EN BOGOTÁ</Text>
          </View>


          {accordionData.map((item, index) => (
            <Accordion
              onPress={() => {
                if (isExpanded === index) {
                  setIsExpanded(accordionList.size)
                } else {
                  setIsExpanded(index)
                }
              }}
              title={<Plate type={item.title.type} platenumber={item.title.platenumber} city={item.title.city} status={item.title.status} clickedId={isExpanded === index} />}
              isCollapsed={isExpanded === index}
              accordionRender={
                <View>
                  {<Info status={item.content.status} status1={item.content.status1} status2={item.content.status2} status3={item.content.status3} status4={item.content.status4} />}
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
