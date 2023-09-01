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
    backgroundColor: appTheme.colors.base.gray400,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    minHeight: 64,
  },
  todoDescription: {
    flex: 2,
    paddingHorizontal: 8,
    fontFamily: appTheme.typography.fontFamily,
    fontSize: appTheme.typography.sizes.medium,
    lineHeight:
      appTheme.typography.sizes.medium * appTheme.typography.lineHeight,
    color: appTheme.colors.base.gray100,
  },
  todoDescriptionDone: {
    color: appTheme.colors.base.gray300,
    textDecorationLine: 'line-through',
  },
});
