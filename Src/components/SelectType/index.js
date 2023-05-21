import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import Images from '../../utils/Images';
import { styles } from './styles';
import { horizontalScale, verticalScale } from '../../screen/Metrics';

const SelectType = (props) => {
    const {
        setType,
    } = props;

    const types = [
        { title: 'particular', image: Images.ic_car },
        { title: 'motorcycle', image: Images.ic_motor },
    ];

    return (
        <SelectDropdown
            data={types}
            // defaultValueByIndex={1}
            // defaultValue={{
            //   title: 'England',
            //   image: require('./Images/England.jpg'),
            // }}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // props.setSelctedCarId(index)
                setType(selectedItem.title);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
                return (
                    <View style={styles.dropdown3BtnChildStyle}>
                        {/* {selectedItem ? (
                                        <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                    ) : (
                                        // <Ionicons name="md-earth-sharp" color={'#444'} size={32} />
                                        <Image source={Images.ico_car} style={{
                                            width: horizontalScale(16),
                                            resizeMode: 'contain',
                                        }} />
                                    )} */}
                        <Image source={Images.ico_car} style={{
                            width: horizontalScale(16),
                            resizeMode: 'contain',
                            marginHorizontal: horizontalScale(15),

                        }} />
                        <View style={{
                            flex: 1,
                        }}>
                            {/* <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select type'}</Text> */}
                            {!selectedItem && <Text style={styles.dropdown3BtnTxt}>Select type</Text>}
                            {selectedItem && <Text style={styles.dropdown3BtnTxtSelect}>{selectedItem.title}</Text>}
                        </View>
                        {/* <FontAwesome name="chevron-down" color={'#444'} size={18} /> */}
                        <Image source={Images.ico_bottom} style={{
                            width: horizontalScale(16),
                            resizeMode: 'contain',
                            marginHorizontal: horizontalScale(15),
                        }} />
                    </View>
                );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
                return (
                    <View style={styles.dropdown3RowChildStyle}>
                        <Image source={item.image} style={styles.dropdownRowImage} />
                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                    </View>
                );
            }}
        />
    )
};

export default SelectType;