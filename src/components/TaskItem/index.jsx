import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {List, IconButton} from 'react-native-paper';
import {COLORS, getNormalizedSizeWithPlatformOffset} from '../../shared/utils';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const TaskItem = ({task, onPress, onEdit, onDelete}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const renderRight = props => {
    return (
      <View>
        <IconButton
          style={styles.iconStyle}
          size={getNormalizedSizeWithPlatformOffset(20)}
          icon="pencil"
          onPress={onEdit}
        />
        <IconButton
          style={styles.iconStyle}
          size={getNormalizedSizeWithPlatformOffset(20)}
          icon="delete"
          onPress={onDelete}
        />
      </View>
    );
  };

  const renderLeft = () => {
    return (
      <View style={styles.leftStyle}>
        <CheckBox
          tintColors={{true: COLORS.RED, false: COLORS.BLACK}}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.container(task?.priority)}
      onPress={onPress}>
      <List.Item
        title={task?.title}
        titleStyle={styles.title}
        description={task?.description}
        right={renderRight}
        left={renderLeft}
      />
      <View style={styles.dateAndCategory}>
        <Text style={styles.description}>{task?.date?.toLocaleString()}</Text>
        <Text style={styles.description}>{task?.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
