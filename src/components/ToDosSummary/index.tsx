/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import {ToDo} from '../../models/toDo';
import React, {Text, View} from 'react-native';
import {styles} from './style';

type ToDosSummaryProps = {
  toDoList: ToDo[];
};

export function ToDosSummary(props: ToDosSummaryProps) {
  const toDosCreatedCount: number = props.toDoList.length;
  const toDosCompletedCount: number = props.toDoList.filter(
    currentTodo => currentTodo.isDone,
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={[styles.info, styles.created]}>Criadas</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{toDosCreatedCount}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.info, styles.done]}>Concluídas</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{toDosCompletedCount}</Text>
        </View>
      </View>
    </View>
  );
}
