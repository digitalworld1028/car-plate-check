import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../Metrics';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(40),
        // paddingVertical: verticalScale(30),
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(40),
        // paddingVertical: verticalScale(30),
    },
    inputField: {
        paddingVertical: horizontalScale(6),
    },
    gradient: {
        flex: 1,
    },
});
