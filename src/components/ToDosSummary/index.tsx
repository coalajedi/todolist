/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import {ToDo} from '../../models/toDo';
import React, {Text, View} from 'react-native';

type ToDosSummaryProps = {
  toDoList: ToDo[];
};

export function ToDosSummary(props: ToDosSummaryProps) {
  const toDosCreatedCount: number = props.toDoList.length;
  const toDosCompletedCount: number = props.toDoList.filter(
    currentTodo => currentTodo.isDone,
  ).length;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Text>Criadas {toDosCreatedCount}</Text>
      <Text>Concluídas {toDosCompletedCount}</Text>
    </View>
  );
}
