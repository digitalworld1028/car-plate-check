import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Platform } from 'react-native';
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


const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

const backformatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [day, month, year].join('-');
}
const diffDate = (date1, date2) => {
  var date1 = new Date(date1);
  var date2 = new Date(date2);
  const diffTime = Math.abs(date2 - date1) * (date2 > date1 ? -1 : 1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}


const Home = ({ navigation }) => {
  const [isExpanded, setIsExpanded] = useState(0);
  const [carData, setCarData] = useState([]);

  const route = useRoute();
  const username = route.params?.username;
  const uid = route.params?.uid;
  const info = route.params?.info;
  console.log(info);
  console.log(new Date().toString());

  const getCurrentInfo = () => {
    let current_time = formatDate(new Date());
    let temp_arr = [];
    info.forEach((item, index) => {
      let status, status2, status3, status4;
      let status1 = 'good';
      console.log("aaasdfsdsdfsdfsdfsdf");
      var range2 = 0, range3 = 0, range4 = 0;
      let diffDate2 = diffDate(item.soat.replaceAll('/', '-'), current_time);
      let diffDate3 = diffDate(item.tecno.replaceAll('/', '-'), current_time);
      let diffDate4 = diffDate(item.extintor.replaceAll('/', '-'), current_time);
      diffDate2 >= 0 ? status2 = 'good' : status2 = 'danger';
      diffDate3 >= 0 ? status3 = 'good' : status3 = 'danger';
      diffDate4 >= 0 ? status4 = 'good' : status4 = 'warning';


      if (diffDate2 >= 10) {
        range2 = 0;
      } else if (diffDate2 >= 0) {
        range2 = 10 - diffDate2;
      } else range2 = 10;

      if (diffDate3 >= 10) {
        range3 = 0;
      } else if (diffDate3 >= 0) {
        range3 = 10 - diffDate3;
      } else range3 = 10;

      if (diffDate4 >= 10) {
        range4 = 0;
      } else if (diffDate4 >= 0) {
        range4 = 10 - diffDate4;
      } else range4 = 10;

      if (status2 == 'good' && status3 == 'good' && status4 == 'good') {
        status = 'good';
      }

      let temp = {
        id: index,
        title: {
          type: item.type,
          platenumber: item.plateNumber,
          city: item.city,
          distance: item.distance,
          status: status
        },
        content: {
          status: status,
          status1: status1,
          current: backformatDate(current_time),
          status2: status2,
          range2: range2,
          soat: backformatDate(item.soat.replaceAll('/', '-')),
          status3: status3,
          range3: range3,
          tecno: backformatDate(item.tecno.replaceAll('/', '-')),
          status4: status4,
          range4: range4,
          extintor: backformatDate(item.extintor.replaceAll('/', '-')),
        }
      }
      temp_arr = [temp, ...temp_arr];
    });
    setCarData(temp_arr);
    // fetch('https://worldtimeapi.org/api/timezone/America/Bogota')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     console.log(json);
    //     console.log(new Date());

    //   })
    //   .catch((error) => console.error('aaa', error));
  }

  useEffect(() => {
    getCurrentInfo();
  }, []);

  return (
    <LinearGradient colors={['rgb(170,170,170)', '#FFFFFF']} locations={[0, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
      {/* <SafeAreaView style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}> */}
      {Platform.OS == 'ios' && <View style={{ height: 35, }}></View>}
      <Header username={username} uid={uid} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: horizontalScale(20),
          // marginTop: horizontalScale(10),
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


        {carData.map((item, index) => (
          <Accordion
            onPress={() => {
              if (isExpanded === index) {
                setIsExpanded(info.length)
              } else {
                setIsExpanded(index)
              }
            }}
            title={<Plate type={item.title.type} platenumber={item.title.platenumber} city={item.title.city} status={item.title.status} clickedId={isExpanded === index} distance={item.title.distance} />}
            isCollapsed={isExpanded === index}
            accordionRender={
              <View>
                {
                  <Info
                    status={item.content.status}
                    status1={item.content.status1}
                    status2={item.content.status2}
                    status3={item.content.status3}
                    status4={item.content.status4}
                    current={item.content.current}
                    soat={item.content.soat}
                    tecno={item.content.tecno}
                    extintor={item.content.extintor}
                    range2={item.content.range2}
                    range3={item.content.range3}
                    range4={item.content.range4}
                  />
                }
              </View>
            } key={item.id} />
        ))}
      </ScrollView>
      <Footer navigation={navigation} uid={uid} username={username} />
      {/* </SafeAreaView> */}
    </LinearGradient>
  );
};


export default Home;
