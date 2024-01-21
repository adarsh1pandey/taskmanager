import {View, ScrollView, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import TaskItem from '../../../components/TaskItem';
import styles from './styles';
import {ADD_ICON} from '../../../assets/icons';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../shared/utils';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATORS} from '../../../shared/constants';
import {useDispatch, useSelector} from 'react-redux';
import {updateTaskArray} from '../../../store/Slices/TaskSlice';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks) || [];
  console.log(taskArray, 'this is task array ');

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
    return (
      <TaskItem
        task={{
          date: item?.dueDate,
          category: item?.category,

          title: item?.title,
          description: item?.description,
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
        data={taskArray}
        keyExtractor={item => item?.id}
        renderItem={renderTasks}
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

export default Home;
