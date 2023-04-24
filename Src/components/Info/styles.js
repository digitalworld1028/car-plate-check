import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../screen/Metrics';

export const styles = StyleSheet.create({
    good: {
        color: '#52C42B',
    },
    danger: {
        color: '#F3401F',
    },
    warning: {
        color: '#F3401F',
    },
    font: {
        fontSize: horizontalScale(15),
        color: '#1A1C20',
        justifyContent: 'center',
        alignItems: 'center',
        // fontWeight: 500,
        fontFamily: 'RobotoCondensed-Regular',
        textAlign: 'center',
        fontSize: verticalScale(14),
    }
});
