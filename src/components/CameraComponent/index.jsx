import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import styles from './styles';
import CustomNoDataFound from '../CustomNoDataFound';
import {requestCameraPermission} from '../../shared/utils';
import {NAVIGATORS, STRINGS} from '../../shared/constants';
import RNFS from 'react-native-fs';
import {useNavigation, useRoute} from '@react-navigation/core';

const CameraComponent = () => {
  const device = useCameraDevice('back');
  const cameraRef = useRef();
  const navigation = useNavigation();
  const [base64Image, setBase64Image] = useState();
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (base64Image) {
      setImage(`data:image/png;base64,${base64Image}`);
      setShowImage(true);
    }
  }, [base64Image]);

  const handleOnPressCapture = async () => {
    try {
      setLoading(true);
      const photo = await cameraRef.current.takePhoto();
      const base64String = await RNFS.readFile(photo.path, 'base64');
      setImage(() => `data:image/png;base64,${base64Image}`);
      setBase64Image(base64String);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (device == null) {
    return <CustomNoDataFound />;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
      />
      {showImage && <Image style={styles.imageStyle} source={{uri: image}} />}
      {!showImage && !loading && (
        <TouchableOpacity
          onPress={handleOnPressCapture}
          style={styles.captureButton}>
          <Text style={styles.text}>{STRINGS.CAPTURE}</Text>
        </TouchableOpacity>
      )}
      {loading && (
        <View style={styles.activityIndicatorStyle}>
          <Text style={styles.boldText}>{STRINGS.CONVERTING_BASE64}</Text>
        </View>
      )}
    </View>
  );
};

export default CameraComponent;
