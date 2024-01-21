import React, {useState, useEffect, useSyncExternalStore} from 'react';
import {View} from 'react-native';
import {
  TextInput as PaperTextInput,
  Button as PaperButton,
  HelperText,
  Text,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import {STRINGS} from '../../../shared/constants';
import {COLORS} from '../../../shared/utils';
import {useDispatch, useSelector} from 'react-redux';
import {updateTaskArray} from '../../../store/Slices/TaskSlice';

const TaskForm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {taskId} = route.params || {};
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(STRINGS.PERSONAL);
  const [priority, setPriority] = useState(STRINGS.HIGH);
  const [dueDate, setDueDate] = useState(new Date());
  const [error, setError] = useState('');

  const taskArray = useSelector(state => state?.taskSlice?.tasks);
  const dispatch = useDispatch();
  console.log(taskArray, 'this is stae guys');

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
    if (
      !title.trim() ||
      !description.trim() ||
      !category ||
      !dueDate ||
      !priority
    ) {
      setError('All fields are required');
      return;
    }

    // Save or update task logic (implementation in Storage.js)
    const data = {
      title,
      description,
      category,
      dueDate: dueDate,
      priority,
      completed: false,
    };
    console.log(taskArray, 'this is task array ');
    // saveOrUpdateTask(data);
    dispatch(updateTaskArray({tasks: [...taskArray, data]}));
    navigation.goBack();
  };

  const handleOnSelectCategory = value => {
    setCategory(value);
  };

  const handleOnSelectPriority = value => {
    setPriority(value);
  };

  const handleDateSelect = date => {
    setDueDate(date);
  };

  return (
    <KeyboardAwareScrollView>
      <PaperTextInput
        label={STRINGS.TITLE}
        value={title}
        onChangeText={setTitle}
        error={error && !title.trim()}
      />
      <HelperText type="error" visible={error && !title?.trim()}>
        {STRINGS.ERROR_MESSAGE.TITLE_REQUIRED}
      </HelperText>
      <PaperTextInput
        label={STRINGS.DESCRIPTION}
        value={description}
        onChangeText={setDescription}
        error={error && !description.trim()}
      />
      <HelperText type="error" visible={error && !description?.trim()}>
        {STRINGS.ERROR_MESSAGE.DESCRIPTION_REQUIRED}
      </HelperText>

      <Text style={styles.text}>{STRINGS.CATEGORIES}</Text>
      <View style={styles.pickerStyle}>
        <Picker
          style={styles.picker}
          dropdownIconColor={COLORS.BLACK}
          selectedValue={category}
          onValueChange={handleOnSelectCategory}>
          <Picker.Item label={STRINGS.PERSONAL} value={STRINGS.PERSONAL} />
          <Picker.Item label={STRINGS.WORK} value={STRINGS.WORK} />
        </Picker>
      </View>
      <Text style={styles.text}>{STRINGS.PRIORITY}</Text>
      <View style={styles.pickerStyle}>
        <Picker
          style={styles.picker}
          dropdownIconColor={COLORS.BLACK}
          selectedValue={priority}
          onValueChange={handleOnSelectPriority}>
          <Picker.Item label={STRINGS.HIGH} value={STRINGS.HIGH} />
          <Picker.Item label={STRINGS.MEDIUM} value={STRINGS.MEDIUM} />
          <Picker.Item label={STRINGS.LOW} value={STRINGS.LOW} />
        </Picker>
      </View>

      <Text style={styles.text}>{STRINGS.DUE_DATE}</Text>
      <CustomDateTimePicker onDateChange={handleDateSelect} />

      <PaperButton
        mode="contained"
        onPress={onSubmit}
        style={styles.buttonStyle}>
        {STRINGS.SAVE}
      </PaperButton>
    </KeyboardAwareScrollView>
  );
};

export default TaskForm;
