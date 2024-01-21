import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, HelperText, RadioButton} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';

const AddEditViewTask = ({onSubmit}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

  const showDateTimePicker = () => {
    setDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  };

  const handleDatePicked = date => {
    setDueDate(date);
    hideDateTimePicker();
  };

  const handleSubmit = () => {
    if (title.trim() === '') {
      setError('Title is required');
    } else {
      onSubmit({title, description, dueDate, category});
      setTitle('');
      setDescription('');
      setDueDate(null);
      setCategory(null);
      setError(null);
    }
  };

  return (
    <View>
      <TextInput
        label="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <TextInput
        label="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <RNPickerSelect
        placeholder={{label: 'Select Category', value: null}}
        items={[
          {label: 'Personal', value: 'Personal'},
          {label: 'Work', value: 'Work'},
          // Add more categories as needed
        ]}
        onValueChange={value => setCategory(value)}
      />
      <Button onPress={showDateTimePicker}>Pick Due Date</Button>
      {dueDate && <Text>Due Date: {dueDate.toString()}</Text>}
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
    </View>
  );
};

export default AddEditViewTask;
