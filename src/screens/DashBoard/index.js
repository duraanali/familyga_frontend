import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

const DashBoard = memo(() => {
  return (
    <View style={styles.container}>
      <Text>DashBoard</Text>
    </View>
  );
});
export default DashBoard;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
});
