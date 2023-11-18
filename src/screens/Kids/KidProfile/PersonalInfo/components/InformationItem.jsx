import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import FONTS from '@utils/fonts';

const InformationItem = memo((props) => {
  const { title, description } = props;

  const renderItem = useCallback((item) => {
    return item.map((content, index) => {
      // Extracting key-value pairs from each content object
      const key = Object.keys(content)[0];
      const value = content[key];
      return (
        <Text style={styles.description} key={index}>
          {`${key}: ${value}`}
        </Text>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.contentView}>{renderItem(description)}</View>
    </View>
  );
});

export default InformationItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
    marginHorizontal: 24,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginBottom: 6,
  },
  contentView: {
    flexDirection: 'column',
    marginTop: 8,
  },
});
