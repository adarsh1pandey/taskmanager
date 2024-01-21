import React, {useEffect, useState} from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text} from 'react-native-paper';
import styles from './styles';

const CustomDateTimePicker = ({
  onDateChange = () => {},
  initialDate = new Date(),
  initialMode = 'datetime',
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(initialDate);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setDate(date);
    onDateChange(date);
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={showDatePicker}>
        <Text style={styles.text} variant="headlineSmall">
          {date.toLocaleString()}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        date={date}
        isVisible={isDatePickerVisible}
        mode={initialMode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default CustomDateTimePicker;
