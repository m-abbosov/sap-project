import {useState} from 'react';
import api from '../api';
import config from '../config';
import {Alert} from 'react-native';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const login = async (username: string, password: string) => {
    setLoading(true);
    api
      .post('/Login', {
        UserName: username,
        Password: password,
        CompanyDB: config.COMPANY_DB,
      })
      .then(response => {
        console.log('res:', response);
        setData(response.data);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    login,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };
};

export default useLogin;
