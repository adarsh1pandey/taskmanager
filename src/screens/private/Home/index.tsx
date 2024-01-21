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

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  console.log(taskArray, 'this is task array ');

  const handleTaskItemEditPress = () => {
    console.log('edit pressed');
  };
  const handleTaskItemDeletePress = () => {
    console.log('delete pressed');
  };
  const handleTaskItemPressed = () => {
    console.log('task item pressed');
  };

  const handleAddTaskButtonPress = () => {
    navigation.navigate(NAVIGATORS.ADD_EDIT_VIEW_TASK);
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
        onPress={handleTaskItemPressed}
        onDelete={handleTaskItemDeletePress}
        onEdit={handleTaskItemEditPress}
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
          height={getNormalizedVerticalSizeWithPlatformOffset(40)}
          width={getNormalizedSizeWithPlatformOffset(40)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
