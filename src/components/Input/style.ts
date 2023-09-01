/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import {StyleSheet} from 'react-native';
import {appTheme} from '../../theme/app-theme';

type StylesProps = {
  isFocused: boolean;
};

export function styles(props: StylesProps) {
  return StyleSheet.create({
    textInput: {
      flex: 1,
      minHeight: 52,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: props.isFocused
        ? appTheme.colors.product.purple
        : appTheme.colors.base.gray500,
      padding: 16,
      backgroundColor: appTheme.colors.base.gray500,
      borderRadius: 8,
      color: appTheme.colors.base.gray100,
    },
  });
}
