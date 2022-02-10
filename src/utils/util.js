import Toast from 'react-native-toast-message';
const showToast = (type, title, msg) => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }

export default showToast;