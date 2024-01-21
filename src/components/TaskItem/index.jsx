import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {List, IconButton} from 'react-native-paper';
import {COLORS, getNormalizedSizeWithPlatformOffset} from '../../shared/utils';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {STRINGS} from '../../shared/constants';

const TaskItem = ({
  task,
  onPress,
  onEdit,
  onDelete,
  disable = false,
  onCheckBoxToggle = value => {},
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(task?.completed);

  const renderRight = props => {
    return (
      <View>
        <IconButton
          style={styles.iconStyle}
          size={getNormalizedSizeWithPlatformOffset(20)}
          icon="pencil"
          iconColor={COLORS.BLACK}
          onPress={onEdit}
        />
        <IconButton
          style={styles.iconStyle}
          size={getNormalizedSizeWithPlatformOffset(20)}
          icon="delete"
          iconColor={COLORS.RED}
          onPress={onDelete}
        />
      </View>
    );
  };

  const handleToggleCheckBox = newValue => {
    setToggleCheckBox(newValue);
    onCheckBoxToggle(newValue);
  };

  const renderLeft = () => {
    return (
      <View style={styles.leftStyle}>
        <CheckBox
          tintColors={{true: COLORS.RED, false: COLORS.BLACK}}
          disabled={disable}
          value={toggleCheckBox}
          onValueChange={handleToggleCheckBox}
        />
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[
        {opacity: toggleCheckBox ? 0.3 : 1},
        styles.container(task?.priority),
      ]}
      onPress={onPress}>
      <List.Item
        title={task?.title}
        titleStyle={[
          {textDecorationLine: toggleCheckBox ? 'line-through' : 'none'},
          styles.title,
        ]}
        description={task?.description}
        descriptionStyle={[
          {textDecorationLine: toggleCheckBox ? 'line-through' : 'none'},
          styles.descriptionStyle,
        ]}
        right={renderRight}
        left={renderLeft}
      />
      <View style={styles.dateAndCategory}>
        <View style={styles.dateAndOverDue}>
          <Text
            style={[
              {
                textDecorationLine: toggleCheckBox ? 'line-through' : 'none',
              },
              styles.description,
            ]}>
            {task?.date?.toLocaleString()}{' '}
            {task?.date < new Date() && (
              <Text style={styles.descriptionOverDue}>{STRINGS.OVERDUE}</Text>
            )}
          </Text>
        </View>
        <Text
          style={[
            {textDecorationLine: toggleCheckBox ? 'line-through' : 'none'},
            styles.description,
          ]}>
          {task?.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
