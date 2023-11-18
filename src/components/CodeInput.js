import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import FONTS from '@utils/fonts';



const CodeInput = (props) => {
  const { sellCount, codeFieldRoot } = props;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: sellCount });
  const [a, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderItem = (index, symbol, isFocused) => {
    if (symbol) {
      const textChild = true ? '•' : symbol;
    } else if (isFocused) {
      const textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    );
  };

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={sellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) =>
          renderItem(index, symbol, isFocused)
        }
      />
    </View>
  );
};

export default CodeInput;

const styles = ScaledSheet.create({
  codeFieldRoot: {
    marginTop: 29,
    marginHorizontal: 45,
  },
  cell: {
    width: 48,
    height: 48,
    backgroundColor: colors.pageBackGround,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
    paddingTop: 13,
    marginRight: 13,
    color: colors.semiBlack,
  },
  focusCell: {
    borderColor: colors.semiBlack,
  },
});
