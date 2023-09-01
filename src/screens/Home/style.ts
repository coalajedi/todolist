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
  emptyList: {
    borderTopWidth: 1,
    borderTopColor: appTheme.colors.base.gray400,
    padding: 16,

    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'stretch',
  },
  clipboardIcon: {
    width: 56,
    height: 56,

    marginBottom: 16,
  },
  emptyListText1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: appTheme.typography.sizes.medium,
    fontFamily: appTheme.typography.fontFamily,
    lineHeight:
      appTheme.typography.sizes.medium * appTheme.typography.lineHeight,

    color: appTheme.colors.base.gray300,
  },
  emptyListText2: {
    textAlign: 'center',
    fontSize: appTheme.typography.sizes.medium,
    fontFamily: appTheme.typography.fontFamily,
    lineHeight:
      appTheme.typography.sizes.medium * appTheme.typography.lineHeight,

    color: appTheme.colors.base.gray300,
  },
});
