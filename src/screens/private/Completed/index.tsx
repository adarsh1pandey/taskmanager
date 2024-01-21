import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TaskItem from '../../../components/TaskItem';
import {useFocusEffect} from '@react-navigation/native';
import styles from './styles';
import CustomNoDataFound from '../../../components/CustomNoDataFound';

const Completed = () => {
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const [completedTasks, setCompletedTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const convertedArray = taskArray.filter(
        value => value?.completed == true,
      );
      setCompletedTasks(() => convertedArray);
      return () => {
        setCompletedTasks([]);
      };
    }, [taskArray]),
  );

  const renderTasks = ({item}, index) => {
    if (!item?.completed) {
      return;
    }
    return (
      <TaskItem
        task={{
          date: item?.dueDate,
          category: item?.category,
          completed: item?.completed,
          title: item?.title,
          description: item?.description,
          priority: item?.priority,
        }}
        disable={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        renderItem={renderTasks}
        keyExtractor={item => item?.id}
        ListEmptyComponent={CustomNoDataFound}
      />
    </View>
  );
};

export default Completed;
