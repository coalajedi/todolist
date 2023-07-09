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
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {ToDoListItem} from '../../components/ToDoListItem';
import {ToDo} from '../../models/toDo';
import {ToDosSummary} from '../../components/ToDosSummary';

const EmptyListComponent = () => {
  return (
    <Text>
      Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens
      a fazer
    </Text>
  );
};

export function Home() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [toDoDescription, setToDoDescription] = useState<string>('');

  function handleAddToDo(): void {
    if (!toDoDescription) {
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
    <SafeAreaView>
      <Text>🚀ToDo</Text>
      <ToDosSummary toDoList={toDoList} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            paddingHorizontal: 16,
          }}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setToDoDescription}
          value={toDoDescription}
        />
        <TouchableOpacity onPress={handleAddToDo}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={toDoList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ToDoListItem
            isDone={item.isDone}
            title={item.description}
            onRemove={() => handleRemoveToDo(item)}
            onUpdate={() => handleUpdateToDo(item, {isDone: !item.isDone})}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyListComponent}
      />
    </SafeAreaView>
  );
}
