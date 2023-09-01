/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import {StyleSheet} from 'react-native';
import {appTheme} from '../../theme/app-theme';

type StyleProps = {
  trashIconColor: string;
  trashBackgroundColor: string;
  plusIconColor: string;
};

export function styles(props: StyleProps | null) {
  return StyleSheet.create({
    createButton: {
      width: 52,
      height: 52,
      backgroundColor: props?.plusIconColor ?? appTheme.colors.product.blueDark,
      borderRadius: 6,
      padding: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusIcon: {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1.5,
      borderColor: appTheme.colors.base.gray100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusIconXAxis: {
      position: 'absolute',
      width: 8,
      height: 1,
      backgroundColor: appTheme.colors.base.gray100,
    },
    plusIconYAxis: {
      position: 'absolute',
      width: 1,
      height: 8,
      backgroundColor: appTheme.colors.base.gray100,
    },
    trashIcon: {
      width: 32,
      height: 32,
      backgroundColor: props?.trashBackgroundColor ?? 'transparent',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    trashLid: {
      width: 14.5,
      height: 2,
      borderRadius: 7.25,
      backgroundColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      transform: [{translateY: 2}],
    },
    trashLidHandle: {
      width: 6,
      height: 4,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      backgroundColor: 'transparent',
      borderColor: props?.trashIconColor ?? appTheme.colors.base.gray300,
      borderWidth: 2,
      borderBottomWidth: 0,
      borderStyle: 'solid',
      top: -2,
      left: 4.25,
    },
    trashContainer: {
      width: 8,
      height: 14,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    trashContainerLeftSide: {
      width: 2,
      height: 14,
      backgroundColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      position: 'absolute',
      left: -2,

      borderRadius: 6,

      transform: [{rotate: '-6deg'}],
    },
    trashContainerRightSide: {
      width: 2,
      height: 14,
      backgroundColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      position: 'absolute',
      right: -2,

      borderRadius: 6,

      transform: [{rotate: '6deg'}],
    },
    trashLine1: {
      width: 1.5,
      height: 5.5,
      backgroundColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      position: 'absolute',

      top: 4,
      left: 1.75,
    },
    trashLine2: {
      width: 1.5,
      height: 5.5,
      backgroundColor: props?.trashIconColor ?? appTheme.colors.base.gray300,

      position: 'absolute',

      top: 4,
      right: 1.75,
    },
  });
}
