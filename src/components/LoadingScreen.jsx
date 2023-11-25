// create a basic react native loading screen
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '@utils/colors';

const LoadingScreen = () => {
  
    
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Just a moment...</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'OpenSans-Regular',
    },
    text: {
        fontSize: 18,
        color: colors.primary,
        fontFamily: 'OpenSans-Regular',
    },
});

export default LoadingScreen;