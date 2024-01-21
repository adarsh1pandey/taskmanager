import {View, Text, TouchableOpacity} from 'react-native';
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

const Home = () => {
  const navigation = useNavigation();

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
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
        <TaskItem
          task={{
            title: 'adarshjfkdsahfjkashldfsahkfhaslhfkjlahkjdfsahlh',
            description:
              'Pandeydjkhsflhafakfhkadfshjklasdfhkshaldfjkhdsakjlhfjklasgfhkjashfljkasfhklfhjklashfjkasdhflsah',
          }}
          onPress={handleTaskItemPressed}
          onDelete={handleTaskItemDeletePress}
          onEdit={handleTaskItemEditPress}
          date={'dsafk'}
        />
      ))}
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
