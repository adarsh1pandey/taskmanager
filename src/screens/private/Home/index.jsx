import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TaskItem from '../../../components/TaskItem';
import styles from './styles';
import {ADD_ICON, CAMERA_SVG} from '../../../assets/icons';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
  requestCameraPermission,
} from '../../../shared/utils';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NAVIGATORS} from '../../../shared/constants';
import {useDispatch, useSelector} from 'react-redux';
import {updateTaskArray} from '../../../store/Slices/TaskSlice';
import CustomNoDataFound from '../../../components/CustomNoDataFound';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const [taskArrayState, setTaskArrayState] = useState([]);

  useEffect(() => {
    requestCameraPermission();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      setTaskArrayState(taskArray);
      return () => {
        setTaskArrayState([]);
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

  const renderTasks = ({item}) => {
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
  const handleGoToCamera = () => {
    navigation.navigate(NAVIGATORS.CAMERA);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskArrayState}
        keyExtractor={item => item?.id}
        renderItem={renderTasks}
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
      <TouchableOpacity
        style={styles.cameraIconView}
        onPress={handleGoToCamera}>
        <CAMERA_SVG
          height={getNormalizedVerticalSizeWithPlatformOffset(50)}
          width={getNormalizedSizeWithPlatformOffset(50)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
