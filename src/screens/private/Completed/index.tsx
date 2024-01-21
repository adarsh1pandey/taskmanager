import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TaskItem from '../../../components/TaskItem';
import {useFocusEffect} from '@react-navigation/native';

const Completed = () => {
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const [completedTasks, setCompletedTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      const filteredArray = taskArray?.filter(value => value.completed == true);
      setCompletedTasks(() => filteredArray);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const renderTasks = ({item}, index) => {
    return (
      <TaskItem
        task={{
          date: item?.dueDate,
          category: item?.category,

          title: item?.title,
          description: item?.description,
        }}
        // onPress={() => handleTaskItemPressed(item)}
        // onDelete={() => handleTaskItemDeletePress(item?.id)}
        // onEdit={() => handleTaskItemEditPress(item)}
        // onCheckBoxToggle={value => handleTaskMarkAsCompleted(value, item)}
      />
    );
  };

  return (
    <View>
      <FlatList data={completedTasks} renderItem={renderTasks} />
    </View>
  );
};

export default Completed;
