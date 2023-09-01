/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {Text, View} from 'react-native';
import {Button, ButtonType} from '../Button';
import {Checkbox} from '../Checkbox';
import {styles} from './style';

type ToDoListItemProps = {
  title: string;
  isDone: boolean;
  onRemove: () => void;
  onToggleTodoStatus: (isDone: boolean) => void;
};

export function ToDoListItem(props: ToDoListItemProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        initialValue={props.isDone}
        onChange={props.onToggleTodoStatus}
      />
      <Text
        style={[
          styles.todoDescription,
          props.isDone ? styles.todoDescriptionDone : null,
        ]}>
        {props.title}
      </Text>
      <Button type={ButtonType.delete} onPress={props.onRemove} />
    </View>
  );
}
