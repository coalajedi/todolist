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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    gap: 8,
  },

  info: {
    fontFamily: appTheme.typography.fontFamily,
    fontSize: appTheme.typography.sizes.medium,
    lineHeight:
      appTheme.typography.sizes.medium * appTheme.typography.lineHeight,
    fontWeight: 'bold',
  },
  created: {
    color: appTheme.colors.product.blue,
  },
  done: {
    color: appTheme.colors.product.purple,
  },
  counterContainer: {
    backgroundColor: appTheme.colors.base.gray400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counter: {
    fontFamily: appTheme.typography.fontFamily,
    fontSize: appTheme.typography.sizes.small,
    lineHeight:
      appTheme.typography.sizes.small * appTheme.typography.lineHeight,
    fontWeight: 'bold',
    color: appTheme.colors.base.gray200,
  },
});
