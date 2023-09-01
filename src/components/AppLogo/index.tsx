/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {Image} from 'react-native';
import {styles} from './style';

export function AppLogo() {
  return (
    <Image
      source={require('../../../assets/images/logo.png')}
      style={styles.logo}
    />
  );
}
