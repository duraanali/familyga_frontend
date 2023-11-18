import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';


const DrugDetailItem = memo((props) => {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDescription}>{description}</Text>
    </View>
  );
});

export default DrugDetailItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
    color: colors.semiBlack,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 9,
  },
});
