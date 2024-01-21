import React, {useState, useEffect} from 'react';
import {View, TextInput, Button} from 'react-native';
import {
  IconButton,
  TextInput as PaperTextInput,
  Button as PaperButton,
  HelperText,
  Text,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import styles from './styles';
import {COLORS} from '../../../shared/utils';

const TaskForm = ({route, navigation}) => {
  const {taskId} = route.params || {};
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [dueDate, setDueDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch task details for editing (implementation in Storage.js)
    // if (taskId) {
    //   const task = fetchTaskById(taskId);
    //   setTitle(task.title);
    //   setDescription(task.description);
    //   setCategory(task.category);
    //   setDueDate(task.dueDate);
    // }
  }, [taskId]);

  const onSubmit = () => {
    // Add your validation logic here
    if (!title.trim() || !description.trim() || !category || !dueDate) {
      setError('All fields are required');
      return;
    }

    // Save or update task logic (implementation in Storage.js)
    const data = {title, description, category, dueDate};
    // saveOrUpdateTask(data);
    navigation.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setDueDate(date);
  };

  return (
    <View style={{padding: 16}}>
      <PaperTextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        error={error && !title.trim()}
      />
      <HelperText type="error" visible={error && !title?.trim()}>
        {error}
      </HelperText>
      <PaperTextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        error={error && !description.trim()}
      />
      <HelperText type="error" visible={error && !description?.trim()}>
        {error}
      </HelperText>

      <Text style={styles.text}>Category</Text>
      <View style={styles.pickerStyle}>
        <Picker
          style={{color: '#000'}}
          dropdownIconColor="#000"
          selectedValue={category}
          onValueChange={value => setCategory(value)}>
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Work" value="Work" />
        </Picker>
      </View>
      <Text style={styles.text}>Category</Text>
      <View style={styles.pickerStyle}>
        <Picker
          style={{color: '#000'}}
          dropdownIconColor="#000"
          selectedValue={category}
          onValueChange={value => setCategory(value)}>
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Work" value="Work" />
        </Picker>
      </View>

      <Text style={styles.text}>Due Date</Text>
      <CustomDateTimePicker />

      <PaperButton mode="contained" onPress={onSubmit} style={{marginTop: 16}}>
        Save
      </PaperButton>
    </View>
  );
};

export default TaskForm;
