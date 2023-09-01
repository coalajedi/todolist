/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

import React, {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Fragment, useState} from 'react';
import {ToDoListItem} from '../../components/ToDoListItem';
import {ToDo} from '../../models/toDo';
import {Button, ButtonType} from '../../components/Button';
import {Input} from '../../components/Input';
import {ToDosSummary} from '../../components/ToDosSummary';
import {AppLogo} from '../../components/AppLogo';
import {styles} from './style';

const EmptyListComponent = () => {
  return (
    <View style={styles.emptyList}>
      <Image
        source={require('../../../assets/images/clipboard.png')}
        style={styles.clipboardIcon}
      />
      <Text style={styles.emptyListText1}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyListText2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export function Home() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [toDoDescription, setToDoDescription] = useState<string>('');

  function handleAddToDo(): void {
    if (!toDoDescription) {
      return;
    }

    const toDoExist = toDoList.find(
      value => value.description === toDoDescription,
    );

    if (toDoExist) {
      Alert.alert('ToDo já existe!');
      return;
    }

    const toDo: ToDo = {
      _id: toDoList.length,
      description: toDoDescription,
      isDone: false,
    };

    setToDoList(prevState => [...prevState, toDo]);
    setToDoDescription('');
    return;
  }

  function handleRemoveToDo(toDo: ToDo): void {
    Alert.alert('Remover ToDo', 'Deseja realmente remover este ToDo?', [
      {
        text: 'Sim',
        onPress: () => {
          setToDoList(prevState => prevState.filter(value => value !== toDo));
          Alert.alert('ToDo removido!');
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleUpdateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>): void {
    const updatedToDo: ToDo = {...toDo, ...fieldsToUpdate};
    setToDoList(prevState =>
      prevState.map(currentToDo =>
        currentToDo._id === toDo._id ? updatedToDo : currentToDo,
      ),
    );
  }

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.header}>
          <View style={styles.appLogo}>
            <AppLogo />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <Input
              placeholder="Adicione uma nova tarefa"
              onChangeText={setToDoDescription}
              value={toDoDescription}
            />
            <Button type={ButtonType.create} onPress={handleAddToDo} />
          </View>
          <ToDosSummary toDoList={toDoList} />
          <FlatList
            data={toDoList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <ToDoListItem
                isDone={item.isDone}
                title={item.description}
                onRemove={() => handleRemoveToDo(item)}
                onToggleTodoStatus={isDone =>
                  handleUpdateToDo(item, {isDone: isDone})
                }
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyListComponent}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
