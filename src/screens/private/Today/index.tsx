import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TaskItem from '../../../components/TaskItem';
import styles from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NAVIGATORS} from '../../../shared/constants';
import {updateTaskArray} from '../../../store/Slices/TaskSlice';
import {ADD_ICON} from '../../../assets/icons';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../shared/utils';
import CustomNoDataFound from '../../../components/CustomNoDataFound';

const Today = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const [todayTask, setTodayTask] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setTodayTask(taskArray);
      return () => {
        setTodayTask([]);
      };
    }, [taskArray]),
  );

  function areDatesEqual(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
  const handleTaskItemEditPress = task => {
    navigation.navigate(NAVIGATORS.ADD_EDIT_VIEW_TASK, {task, edit: true});
  };
  const handleTaskItemDeletePress = id => {
    const filteredArray = taskArray.filter(item => item?.id != id);
    dispatch(updateTaskArray({tasks: filteredArray}));
  };
  const handleTaskItemPressed = task => {
    navigation.navigate(NAVIGATORS.ADD_EDIT_VIEW_TASK, {task, edit: false});
  };

  const handleAddTaskButtonPress = () => {
    navigation.navigate(NAVIGATORS.ADD_EDIT_VIEW_TASK, {add: true});
  };

  const handleTaskMarkAsCompleted = (value, item) => {
    console?.log(value, 'this is value guys');
    const updatedArray = taskArray.reduce(function (accumulator, currentValue) {
      if (currentValue.id === item?.id) {
        accumulator.push({...currentValue, completed: value});
      } else {
        accumulator.push(currentValue);
      }

      return accumulator;
    }, []);

    dispatch(updateTaskArray({tasks: [...updatedArray]}));
  };

  const renderTasks = ({item}, index) => {
    if (!areDatesEqual(new Date(item?.dueDate), new Date())) {
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
        onPress={() => handleTaskItemPressed(item)}
        onDelete={() => handleTaskItemDeletePress(item?.id)}
        onEdit={() => handleTaskItemEditPress(item)}
        onCheckBoxToggle={value => handleTaskMarkAsCompleted(value, item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={todayTask}
        renderItem={renderTasks}
        keyExtractor={item => item?.id}
        ListEmptyComponent={CustomNoDataFound}
      />
      <TouchableOpacity
        style={styles.addIconView}
        onPress={handleAddTaskButtonPress}>
        <ADD_ICON
          height={getNormalizedVerticalSizeWithPlatformOffset(50)}
          width={getNormalizedSizeWithPlatformOffset(50)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Today;
