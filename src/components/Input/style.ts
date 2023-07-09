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
  textInput: {
    flex: 1,
    padding: 16,
    backgroundColor: appTheme.colors.base.gray500,
    borderRadius: 8,
    color: appTheme.colors.base.gray100,
  },
});
