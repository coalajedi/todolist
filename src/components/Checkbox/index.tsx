/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {styles} from './style';

type CheckboxProps = {
  initialValue: boolean;
  onChange: (newValue: boolean) => void;
};

export function Checkbox(props: CheckboxProps) {
  const [value, setValue] = useState<boolean>(props.initialValue);

  function onPress() {
    const newValue = !value;

    setValue(newValue);
    props.onChange(newValue);
  }

  return (
    <TouchableOpacity
      style={styles.checkboxShape}
      onPress={onPress}
      activeOpacity={0.5}>
      <View
        style={[
          styles.checkboxShape,
          value ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}>
        {value ? (
          <View style={styles.checkmark}>
            <View style={styles.checkmarkStem} />
            <View style={styles.checkmarkKick} />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
