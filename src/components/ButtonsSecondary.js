import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import colors from '@utils/colors';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@utils/fonts';


const ButtonsSecondary = (props) => {
  const {
    labelButton1,
    labelButton2,
    onPressButton1,
    onPressButton2,
    enable,
  } = props;

  const styleButton = enable ? styles.buttonActive : styles.buttonInActive;
  const styleButton1 = enable ? styles.buttonInActive : styles.buttonActive;
  const txtStyle = enable ? styles.txtInActive : styles.txtActive;
  const txtStyle1 = enable ? styles.txtActive : styles.txtInActive;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressButton1}
        style={[styleButton, { marginRight: 12 }]}
        activeOpacity={1}>
        <Text style={txtStyle}>{labelButton1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressButton2}
        style={styleButton1}
        activeOpacity={1}>
        <Text style={txtStyle1}>{labelButton2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsSecondary;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonActive: {
    height: 32,
    width: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondBlue,
  },
  buttonInActive: {
    height: 32,
    width: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  txtActive: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 13,
    color: '#D0C9D6',
    textTransform: 'capitalize',
  },
  txtInActive: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 14,
    color: colors.white,
    textTransform: 'capitalize',
  },
});
