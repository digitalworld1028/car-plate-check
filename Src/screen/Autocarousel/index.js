import React, { useState, useEffect, useRef } from 'react'
import { View, Image, Text, Dimensions, StyleSheet, SafeAreaView } from 'react-native';

import Images from '../../utils/Images';
import { horizontalScale, verticalScale } from '../Metrics';

import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';

import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';


const Autocarousel = ({ navigation }) => {

    const ENTRIES1 = [
        {
            title: 'Text',
            thumbnail: Images.frame1,
        },
        {
            title: 'Text 1',
            thumbnail: Images.frame2,
        },
        {
            title: 'Text 2',
            thumbnail: Images.frame3,
        },
    ];





    const [entries, setEntries] = useState([]);
    // const [activeTab, setActiveTab] = useState(0);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.thumbnail}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    };

    return (

        <LinearGradient colors={['#00C7E5', '#FFFFFF']} locations={[-0.699, 0.3526]} useAngle={true} angle={191.84} style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                <View style={{
                    width: verticalScale(327),
                    height: verticalScale(256),
                }}>
                    <Carousel
                        ref={carouselRef}
                        loop={true}
                        autoplay={true}
                        sliderWidth={verticalScale(327)}
                        sliderHeight={verticalScale(256)}
                        // itemWidth={verticalScale(327) - 60}
                        itemWidth={verticalScale(327)}
                        data={entries}
                        renderItem={renderItem}
                        hasParallaxImages={true}
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                    />
                </View>

                <View style={{}}>
                    <Image
                        resizeMode={'contain'}
                        source={Images.logo_row}
                        style={{
                            width: verticalScale(215),
                            height: verticalScale(88),
                        }}
                    />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontStyle: 'normal',
                            fontSize: verticalScale(32),
                            fontWeight: 700,
                            color: '#1A1C20',
                            width: verticalScale(260),
                            textAlign: 'center',
                            fontFamily: 'RobotoCondensed',
                        }}>
                        Administrar uno o
                        más vehículos
                    </Text>
                    <Text
                        style={{
                            fontWeight: 300,
                            fontSize: verticalScale(18),
                            color: '#1A1C20',
                            width: verticalScale(320),
                            paddingTop: verticalScale(10),
                            textAlign: 'center',
                            fontFamily: 'RobotoCondensed',
                        }}>
                        Agrega, administra y mantén actualizados los roles de tus vehículos
                    </Text>
                </View>


                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <Button label={'SIGUIENTE'} />
                </View>
            </SafeAreaView>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: verticalScale(40),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(90)
    },
    gradient: {
        flex: 1,
    },
    item: {
        width: verticalScale(327),
        height: verticalScale(256),
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        // backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: verticalScale(327),
        height: verticalScale(256),
        resizeMode: 'contain',
    },
});

export default Autocarousel;