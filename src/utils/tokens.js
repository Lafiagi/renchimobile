import * as SecureStore from 'expo-secure-store';
async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  async function getToken(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result
    } else {
      console.log('No token stored under that key.');
    }
  }
  export  {saveToken, getToken}