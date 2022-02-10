import {saveToken, getToken} from '../utils/tokens';
import axios from '../api/auth';
import { StackActions } from '@react-navigation/routers';
export const login = (setErrorMsg, setIsloading, setUserData, email, password, navigation) => {
    setIsloading(true)
    axios
      .post("/login", {
          email: email,
          password: password
      })
      .then((response) => {
        const account_number = response.data.account_number
        const tokenData = response.data.token
        setUserData(response.data)
        setIsloading(false) 
        navigation.dispatch(
          StackActions.replace('Tabs'));
      })
      .catch((error) => {
        setIsloading(false)
        console.log('Login error'+ JSON.stringify(error))
        setErrorMsg(error.message)
        
      });
  };