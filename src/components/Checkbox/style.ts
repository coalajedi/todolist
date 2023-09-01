/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import {StyleSheet} from 'react-native';
import {appTheme} from '../../theme/app-theme';

export const styles = StyleSheet.create({
  checkboxShape: {
    width: 17.5,
    height: 17.5,
    borderRadius: 8.75,
  },

  checkboxUnchecked: {
    borderColor: appTheme.colors.product.blue,
    borderStyle: 'solid',
    borderWidth: 1.5,
  },

  checkboxChecked: {
    backgroundColor: appTheme.colors.product.purpleDark,
  },

  checkmark: {
    width: 10,
    height: 10,
    transform: [{rotate: '45deg'}],
  },

  checkmarkStem: {
    position: 'absolute',
    width: 2,
    height: 9,
    backgroundColor: appTheme.colors.base.gray100,
    left: 11,
    top: 0,
  },

  checkmarkKick: {
    position: 'absolute',
    width: 4,
    height: 2,
    backgroundColor: appTheme.colors.base.gray100,
    left: 7,
    top: 7,
  },
});
