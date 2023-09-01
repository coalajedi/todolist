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
  safeAreaTop: {
    flex: 0,
    backgroundColor: appTheme.colors.base.gray700,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: appTheme.colors.base.gray600,
  },
  header: {
    height: '15%',
    backgroundColor: appTheme.colors.base.gray700,
  },
  appLogo: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    height: '85%',
    padding: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    position: 'relative',
    top: -26 - 16, // Half height + body padding
  },
});
