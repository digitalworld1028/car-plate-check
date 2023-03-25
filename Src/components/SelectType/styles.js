import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../screen/Metrics';

export const styles = StyleSheet.create({

    dropdown3BtnStyle: {
        width: '100%',
        height: verticalScale(51),
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FF6700',
        marginVertical: verticalScale(6),
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 18,
    },
    dropdown3BtnImage: { width: 45, height: 45, resizeMode: 'cover' },
    dropdown3BtnTxt: {
        color: '#FF6700',
        textAlign: 'left',
        fontSize: 14,
    },
    // dropdown3DropdownStyle: { backgroundColor: '#FF6700' },
    dropdown3RowStyle: {
        backgroundColor: 'white',
        borderColor: '#FF6700',
        height: horizontalScale(40),
        // borderRadius: horizontalScale(10),
        borderWidth: horizontalScale(1),
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdownRowImage: {
        width: horizontalScale(30),
        resizeMode: 'contain',
        // backgroundColor: '#FF6700',
    },
    dropdown3RowTxt: {
        color: '#FF6700',
        textAlign: 'center',
        fontSize: horizontalScale(15),
        marginHorizontal: 12,
    },

});
