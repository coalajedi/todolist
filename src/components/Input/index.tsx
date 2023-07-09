/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {TextInput} from 'react-native';
import {styles} from './style';
import {appTheme} from '../../theme/app-theme';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function Input(props: InputProps) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      placeholderTextColor={appTheme.colors.base.gray300}
      cursorColor={appTheme.colors.base.gray100}
      selectionColor={appTheme.colors.base.gray100}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
