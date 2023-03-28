import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../screen/Metrics';

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
        fontSize: horizontalScale(14),
        color: '#1A1C20',
        justifyContent: 'center',
        alignItems: 'center',
        // fontWeight: 500,
        fontFamily: 'RobotoCondensed-Bold',
        textAlign: 'center',
    }
});
