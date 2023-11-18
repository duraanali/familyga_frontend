import React, { memo } from 'react';
import FONTS from '@utils/fonts';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@utils/colors';


const HeaderTitle = memo((props) => {
  const { title, children } = props;
  return children ? (
    <View>{children}</View>
  ) : (
    <Text style={styles.title}>{title}</Text>
  );
});

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    color: colors.white,
  },
});
