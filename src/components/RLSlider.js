import React, { useCallback, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import colors from '@utils/colors';
import SvgCircle from '@svgs/SvgMainLine';
import { widthScreen } from '@utils/dimensions';
import {LinearGradient} from 'expo-linear-gradient';
import FONTS from '@utils/fonts';

const RLSlider = (props) => {
  const { value, maxValue, minValue, unitOfMeasure, ratio } = props;
  const [valueScroll, setValueScroll] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const renderLine = useCallback(() => {
    let star = [];
    for (let i = 0; i <= 1.1 * value; i++) {
      if (i === 0 || i % 5 === 0) {
        star.push(<View key={i} style={styles.longLine} />);
      } else {
        star.push(<View key={i} style={styles.shortLine} />);
      }
    }
    return star;
  }, [value]);

  const handleScroll = (event) => {
    setValueScroll(event.nativeEvent.contentOffset.y);
    if (valueScroll < minValue) {
      setCalculatedValue(minValue);
    } else if (valueScroll > maxValue) {
      setCalculatedValue(maxValue / ratio);
    } else {
      setCalculatedValue(parseInt(valueScroll / ratio));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}>
        {renderLine()}
      </ScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearTop}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearBottom}
      />
      <View style={styles.mainLineView}>
        <SvgCircle />
        <Text style={styles.txtValue}>
          {calculatedValue}
          {unitOfMeasure}
        </Text>
      </View>
    </View>
  );
};
export default RLSlider;

const styles = ScaledSheet.create({
  container: {
    marginTop: 47,
    height: 445,
  },
  longLine: {
    width: 80,
    height: 1,
    borderRadius: 1,
    backgroundColor: colors.silverChalice,
    marginBottom: 9,
  },
  shortLine: {
    width: 48,
    height: 1,
    borderRadius: 1,
    backgroundColor: colors.silverChalice,
    marginBottom: 9,
  },
  mainLineView: {
    flexDirection: 'row',
    position: 'absolute',
    top: widthScreen / 2,
    alignItems: 'center',
  },
  linearTop: {
    height: 30,
    width: widthScreen,
    position: 'absolute',
    top: 0,
  },
  linearBottom: {
    backgroundColor: colors.white,
    height: 30,
    width: widthScreen,
    position: 'absolute',
    bottom: 0,
    opacity: 0.6,
  },
  txtValue: {
    fontFamily: FONTS.HIND.Bold,
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: colors.bluePrimary,
    marginLeft: 30,
  },
});
