import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



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
    day = '' + (d.getDate() + 1),
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
  const user = auth().currentUser;

  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [apikey, setApiKey] = useState('');

  const cityList = ['Leticia', 'Medellín', 'Arauca', 'Barranquilla', 'Bogotá', 'Cartagena de Indias', 'Tunja',
    'Manizales', 'Florencia', 'Yopal', 'Popayán', 'Valledupar', 'Quibdó', 'Montería', 'Inírida', 'San José del Guaviare',
    'Neiva', 'Riohacha', 'Santa Marta', 'Villavicencio', 'Pasto', 'San José de Cúcuta', 'Mocoa', 'Armenia', 'Pereira',
    'San Andrés', 'Bucaramanga', 'Sincelejo', 'Ibagué', 'Cali', 'Mitú', 'Puerto Carreño'];

  firestore()
    .collection('api')
    .doc('map')
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setApiKey(documentSnapshot.data().key);
      }
    });


  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.log('position: ', position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text

        console.log('api key = ', apikey);
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + ',' + currentLongitude + '&key=AIzaSyAoGoRxR9Rn9VqvzdAnEHO0DScyv-YDqtY')
          .then(response => response.json())
          .then(data => {
            let formatted_address = data['results'][0]['formatted_address'];
            console.log('formated_address', formatted_address);
            cityList.map((item, index) => {
              if (formatted_address.includes(item)) {
                // console.log(item);
                setCurrentCity(item);
              }
            });
            // data['results'][0]['address_components'].map((item, index) => {
            //   if (item['types'].includes('locality')) {
            //     setCurrentCity(item['long_name']);
            //   }
            // })
          });



      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: true, maximumAge: 1000 },
    );
  };

  const [isExpanded, setIsExpanded] = useState(0);
  const [carData, setCarData] = useState([]);
  const [username, setUsername] = useState('');

  const route = useRoute();
  const uid = route.params?.uid;
  let info = [];

  const getCurrentInfo = () => {
    setIsExpanded(0);
    firestore()
      .collection('users')
      .doc(uid)
      // .get()
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUsername(documentSnapshot.data().name);
          info = documentSnapshot.data().info;
          let current_time = formatDate(new Date());
          let day = new Date().toString().substring(0, 3);
          let days = { 'Mon': 0, 'Tue': 1, 'Wed': 2, 'Thu': 3, 'Fri': 4, 'Sat': 5, 'Sun': 6 }
          let current_day = days[day];
          let date_day = new Date().getDate();
          let current_hour = new Date().getHours();

          let temp_arr = [];

          let location = 'Barranquilla';
          let rules;

          firestore().collection('rules').doc(location)
            .get()
            .then(documentSnapshot => {
              rules = documentSnapshot.data();
              if (rules['method'] === 1) {
                info.forEach((item, index) => {

                  let status, status2, status3, status4;
                  let status1;
                  var range2 = 0, range3 = 0, range4 = 0;
                  let diffDate2 = diffDate(item.soat.replaceAll('/', '-'), current_time);
                  let diffDate3 = diffDate(item.tecno.replaceAll('/', '-'), current_time);
                  let diffDate4 = diffDate(item.extintor.replaceAll('/', '-'), current_time);

                  if (rules.type[item.type] === undefined) {
                    status1 = 'good';
                  }
                  else {
                    let last_number = parseInt(item.plateNumber.slice(-1));
                    if (current_day === 5 || current_day === 6) {
                      status1 = 'good';
                    }
                    else {
                      if (rules.type[item.type].rule.even === 'even') {
                        if (date_day % 2 === last_number % 2 && current_hour >= rules.type[item.type].time.start && current_hour <= rules.type[item.type].time.end) {
                          status1 = 'danger';
                        }
                        else status1 = 'good';
                      }
                      if (rules.type[item.type].rule.even === 'odd') {
                        if (date_day % 2 !== last_number % 2 && current_hour >= rules.type[item.type].time.start && current_hour <= rules.type[item.type].time.end) {
                          status1 = 'danger';
                        }
                        else status1 = 'good';
                      }

                    }
                    rules.type[item.type].other.map((other_item, i) => {
                      if (other_item.date === current_time) {
                        if (other_item.number.includes(last_number) && current_hour >= other_item.time.start && current_hour <= other_item.time.end) {
                          status1 = 'danger';
                        }
                      }
                    })
                  }

                  diffDate2 >= 0 ? status2 = 'good' : status2 = 'danger';
                  diffDate3 >= 0 ? status3 = 'good' : status3 = 'danger';
                  if (item.type !== 'motorycle') {
                    diffDate4 >= 0 ? status4 = 'good' : status4 = 'warning';
                  }

                  if (diffDate2 >= 10) {
                    range2 = 0;
                  } else if (diffDate2 >= 0) {
                    range2 = 10 - diffDate2;
                  } else range2 = diffDate2;

                  if (diffDate3 >= 10) {
                    range3 = 0;
                  } else if (diffDate3 >= 0) {
                    range3 = 10 - diffDate3;
                  } else range3 = diffDate3;

                  if (item.type !== 'motorycle') {
                    if (diffDate4 >= 10) {
                      range4 = 0;
                    } else if (diffDate4 >= 0) {
                      range4 = 10 - diffDate4;
                    } else range4 = diffDate4;

                  }

                  if (item.type !== 'motorycle') {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good' && status4 == 'good') status = 'good';
                    else if (status1 === 'good' && status2 === 'good' && status3 === 'good' && status4 === 'warning') status = 'warning';
                    else status = 'danger';
                  }
                  else {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good') status = 'good';
                    else status = 'danger';
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
                      type: item.type,
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
              }

              if (rules['method'] === 2) {

                info.forEach((item, index) => {

                  let status, status2, status3, status4;
                  let status1;
                  var range2 = 0, range3 = 0, range4 = 0;
                  let diffDate2 = diffDate(item.soat.replaceAll('/', '-'), current_time);
                  let diffDate3 = diffDate(item.tecno.replaceAll('/', '-'), current_time);
                  let diffDate4 = diffDate(item.extintor.replaceAll('/', '-'), current_time);


                  if (rules.type[item.type] === undefined) {
                    status1 = 'good';
                  }
                  else {
                    let last_number = parseInt(item.plateNumber.slice(-1));
                    if (current_day === 5 || current_day === 6) {
                      status1 = 'good';
                    }
                    else {
                      if (rules.type[item.type].rule[current_day].includes(last_number) && current_hour >= rules.type[item.type].time.start && current_hour <= rules.type[item.type].time.end) {
                        status1 = 'danger';
                      }
                      else status1 = 'good';
                    }

                    rules.type[item.type].other.map((other_item, i) => {
                      if (other_item.date === current_time) {
                        if (other_item.number.includes(last_number) && current_hour >= other_item.time.start && current_hour <= other_item.time.end) {
                          status1 = 'danger';
                        }
                      }
                    })
                  }


                  diffDate2 >= 0 ? status2 = 'good' : status2 = 'danger';
                  diffDate3 >= 0 ? status3 = 'good' : status3 = 'danger';
                  if (item.type !== 'motorycle') {
                    diffDate4 >= 0 ? status4 = 'good' : status4 = 'warning';
                  }

                  if (diffDate2 >= 10) {
                    range2 = 0;
                  } else if (diffDate2 >= 0) {
                    range2 = 10 - diffDate2;
                  } else range2 = diffDate2;

                  if (diffDate3 >= 10) {
                    range3 = 0;
                  } else if (diffDate3 >= 0) {
                    range3 = 10 - diffDate3;
                  } else range3 = diffDate3;

                  if (item.type !== 'motorycle') {
                    if (diffDate4 >= 10) {
                      range4 = 0;
                    } else if (diffDate4 >= 0) {
                      range4 = 10 - diffDate4;
                    } else range4 = diffDate4;

                  }

                  if (item.type !== 'motorycle') {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good' && status4 == 'good') status = 'good';
                    else if (status1 === 'good' && status2 === 'good' && status3 === 'good' && status4 === 'warning') status = 'warning';
                    else status = 'danger';
                  }
                  else {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good') status = 'good';
                    else status = 'danger';
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
                      type: item.type,
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
              }

              if (rules['method'] === 3) {

                info.forEach((item, index) => {

                  let status, status2, status3, status4;
                  let status1;
                  var range2 = 0, range3 = 0, range4 = 0;
                  let diffDate2 = diffDate(item.soat.replaceAll('/', '-'), current_time);
                  let diffDate3 = diffDate(item.tecno.replaceAll('/', '-'), current_time);
                  let diffDate4 = diffDate(item.extintor.replaceAll('/', '-'), current_time);


                  if (rules.type[item.type] === undefined) {
                    status1 = 'good';
                  }
                  else {
                    // if (current_day === 5 || current_day === 6) {
                    //   status1 = 'good';
                    // }
                    // else {

                    //   let last_number = parseInt(item.plateNumber.slice(-1));

                    //   if (rules.type[item.type].rule[current_time].includes(last_number) && current_hour >= rules.type[item.type].time.start && current_hour < rules.type[item.type].time.end) {
                    //     status1 = 'danger';
                    //   }
                    //   else status1 = 'good';

                    // }

                    let last_number = parseInt(item.plateNumber.slice(-1));
                    if (rules.type[item.type].rule[current_time] === undefined) {
                      status1 = 'good';
                    }
                    else {
                      if (rules.type[item.type].rule[current_time].includes(last_number) && current_hour >= rules.type[item.type].time.start && current_hour < rules.type[item.type].time.end) {
                        status1 = 'danger';
                      }
                      else status1 = 'good';
                    }


                  }

                  diffDate2 >= 0 ? status2 = 'good' : status2 = 'danger';
                  diffDate3 >= 0 ? status3 = 'good' : status3 = 'danger';
                  if (item.type !== 'motorycle') {
                    diffDate4 >= 0 ? status4 = 'good' : status4 = 'warning';
                  }

                  if (diffDate2 >= 10) {
                    range2 = 0;
                  } else if (diffDate2 >= 0) {
                    range2 = 10 - diffDate2;
                  } else range2 = diffDate2;

                  if (diffDate3 >= 10) {
                    range3 = 0;
                  } else if (diffDate3 >= 0) {
                    range3 = 10 - diffDate3;
                  } else range3 = diffDate3;

                  if (item.type !== 'motorycle') {
                    if (diffDate4 >= 10) {
                      range4 = 0;
                    } else if (diffDate4 >= 0) {
                      range4 = 10 - diffDate4;
                    } else range4 = diffDate4;

                  }

                  if (item.type !== 'motorycle') {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good' && status4 == 'good') status = 'good';
                    else if (status1 === 'good' && status2 === 'good' && status3 === 'good' && status4 === 'warning') status = 'warning';
                    else status = 'danger';
                  }
                  else {
                    if (status1 == 'good' && status2 == 'good' && status3 == 'good') status = 'good';
                    else status = 'danger';
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
                      type: item.type,
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
              }

              setCarData(temp_arr);
            })
        }
        else {
          firestore()
            .collection('users')
            .doc(user.uid)
            .set({
              name: user.displayName,
              email: user.email,
              info: [],
            })
            .then(() => {
              console.log('User initial Info added!');
            });
        }

      });


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
      {Platform.OS == 'ios' && <View style={{ height: 35, }}></View>}
      <Header username={username} navigation={navigation} />
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
          }}>ESTÁS EN {currentCity}</Text>
        </View>


        {carData.map((item, index) => (
          <Accordion
            onPress={() => {
              if (isExpanded === index) {
                setIsExpanded(carData.length)
              } else {
                setIsExpanded(index)
              }
            }}
            title={<Plate uid={uid} type={item.title.type} platenumber={item.title.platenumber} city={item.title.city} status={item.title.status} clickedId={isExpanded === index} distance={item.title.distance} />}
            isCollapsed={isExpanded === index}
            accordionRender={
              <View>
                {
                  <Info
                    type={item.content.type}
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
      <Footer navigation={navigation} uid={uid} />
    </LinearGradient>
  );
};


export default Home;
