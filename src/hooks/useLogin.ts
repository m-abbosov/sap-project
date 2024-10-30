import {useState} from 'react';
import api from '../api';
import config from '../config';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import service from '../navigators/service';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.post('/Login', {
        UserName: username,
        Password: password,
        CompanyDB: config.COMPANY_DB,
      });
      const sessionId = response.data.SessionId;

      await AsyncStorage.setItem('sessionId', sessionId);
      service.reset('home');
    } catch (err: any) {
      Alert.alert('Error', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    setLoading,
    error,
    setError,
  };
};

export default useLogin;
