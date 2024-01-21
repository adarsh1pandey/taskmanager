import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomNoDataFound from '../../../components/CustomNoDataFound';
import TaskItem from '../../../components/TaskItem';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {NAVIGATORS, STRINGS} from '../../../shared/constants';
import styles from './styles';
import {ADD_ICON} from '../../../assets/icons';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../shared/utils';
import {updateTaskArray} from '../../../store/Slices/TaskSlice';

const Personal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const [personalTasks, setPersonalTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const convertedArray = taskArray.filter(
        value => value?.category == STRINGS.PERSONAL,
      );
      setPersonalTasks(() => convertedArray);
      return () => {
        setPersonalTasks([]);
      };
    }, [taskArray]),
  );

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
          completed: item?.completed,
          title: item?.title,
          description: item?.description,
          priority: item?.priority,
        }}
        onPress={() => handleTaskItemPressed(item)}
        onDelete={() => handleTaskItemDeletePress(item?.id)}
        onEdit={() => handleTaskItemEditPress(item)}
        onCheckBoxToggle={value => handleTaskMarkAsCompleted(value, item)}
        // disable={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={personalTasks}
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

export default Personal;
