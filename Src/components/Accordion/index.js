import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';


const Accordion = props => {

    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </TouchableOpacity>
            <Collapsible
                //The small change is at collapsed
                collapsed={!props.isCollapsed}>
                {props.accordionRender}
            </Collapsible>
        </View>
    );
}

export default Accordion;