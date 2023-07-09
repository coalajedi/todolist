/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {Text, TouchableOpacity, View} from 'react-native';

type ToDoListItemProps = {
  title: string;
  isDone: boolean;
  onRemove: () => void;
  onUpdate: () => void;
};

type TextButtonProps = {
  text: string;
  onPress: () => void;
};

function TextButton(props: TextButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ToDoListItem(props: ToDoListItemProps) {
  return (
    <View>
      <TextButton text={props.isDone.toString()} onPress={props.onUpdate} />
      <Text>{props.title}</Text>
      <TextButton text="Remover" onPress={props.onRemove} />
    </View>
  );
}
