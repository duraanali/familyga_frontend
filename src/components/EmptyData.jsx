import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '@utils/colors';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from "@components/ButtonPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";


const EmptyData = ({ message, route, buttonTitle }) => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            <View style={styles.buttonView}>
            <ButtonPrimary title={buttonTitle} onPress={() => navigate(route)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',

    },
    buttonView: {
        position: "absolute",
        paddingBottom: getBottomSpace() + 24,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 12,
        paddingHorizontal: 40,
        backgroundColor: colors.white,
      },
});

export default EmptyData;
