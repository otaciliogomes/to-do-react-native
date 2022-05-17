import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      done: false
    }
    console.log(newTask)
    setTasks(oldsTask => [...oldsTask, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const newTasks = tasks.map(task => {
      if(task.id == id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasks = tasks.filter(task => {
      if(task.id !== id) {
        return task
      }
    })
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})