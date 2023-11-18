import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import colors from '@utils/colors';
import FONTS from '@utils/fonts';
import SvgRightArrow from '@svgs/SvgRightArrow';

const TopicItem = memo((props) => {
  const { Svg, title, onPress, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <View style={styles.svgView}>{Svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
      <SvgRightArrow style={styles.svg} />
    </TouchableOpacity>
  );
});

export default TopicItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  svgView: {
    width: 48,
    height: 48,
    borderRadius: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    color: colors.semiBlack,
  },
  svg: {
    position: 'absolute',
    right: 21,
  },
});
