// components/TaskItem.js
import React from 'react';
import {Text} from 'react-native';
import {List, IconButton} from 'react-native-paper';

const TaskItem = ({task, onPress, onEdit, onDelete, date, category}) => {
  return (
    <List.Item
      style={{backgroundColor: '#f00'}}
      title={task?.title}
      description={task?.description}
      des
      onPress={onPress}
      right={() => (
        <>
          <IconButton icon="pencil" onPress={onEdit} />
          <IconButton icon="delete" onPress={onDelete} />
        </>
      )}></List.Item>
  );
};

export default TaskItem;
