/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useState} from 'react';
import {appTheme} from '../../theme/app-theme';

interface BaseButtonProps {
  onPress: () => void;
}

interface ButtonProps extends BaseButtonProps {
  type: ButtonType;
}

export enum ButtonType {
  delete,
  create,
}

function DeleteButton(props: BaseButtonProps) {
  const [iconColor, setIconColor] = useState<string>(
    appTheme.colors.base.gray300,
  );

  const [backgroundIconColor, setBackgroundIconColor] =
    useState<string>('transparent');

  let buttonStyle = styles({
    trashIconColor: iconColor,
    trashBackgroundColor: backgroundIconColor,
    plusIconColor: '',
  });

  function onPressIn() {
    setBackgroundIconColor(appTheme.colors.base.gray500);
    setIconColor(appTheme.colors.feedback.danger);
  }

  function onPressOut() {
    setBackgroundIconColor('transparent');
    setIconColor(appTheme.colors.base.gray300);
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View style={buttonStyle.trashIcon}>
        <View style={buttonStyle.trashLid}>
          <View style={buttonStyle.trashLidHandle} />
        </View>
        <View style={buttonStyle.trashContainer}>
          <View style={buttonStyle.trashContainerLeftSide} />
          <View style={buttonStyle.trashContainerRightSide} />
          <View style={buttonStyle.trashLine1} />
          <View style={buttonStyle.trashLine2} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

function CreateButton(props: BaseButtonProps) {
  const [iconColor, setIconColor] = useState<string>(
    appTheme.colors.product.blueDark,
  );

  let buttonStyle = styles({
    trashIconColor: '',
    trashBackgroundColor: '',
    plusIconColor: iconColor,
  });
  return (
    <TouchableHighlight
      style={buttonStyle.createButton}
      onPress={props.onPress}
      activeOpacity={1}
      underlayColor={appTheme.colors.base.gray100}
      onPressIn={() => setIconColor(appTheme.colors.product.blue)}
      onPressOut={() => setIconColor(appTheme.colors.product.blueDark)}>
      <View style={buttonStyle.plusIcon}>
        <View style={buttonStyle.plusIconXAxis} />
        <View style={buttonStyle.plusIconYAxis} />
      </View>
    </TouchableHighlight>
  );
}

export function Button(props: ButtonProps) {
  switch (props.type) {
    case ButtonType.delete:
      return <DeleteButton onPress={props.onPress} />;
    case ButtonType.create:
      return <CreateButton onPress={props.onPress} />;
  }
}
