import {Alert} from 'react-native';
import api from '../api';
import {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import service from '../navigators/service';
import {BusinessPartner} from '../types';

const useBusinessPartners = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<BusinessPartner[] | null>(null);

  const getBusinessPartners = useCallback(async () => {
    const sessionId = await AsyncStorage.getItem('sessionId');
    if (!sessionId) {
      service.navigate('login');
      return;
    }
    setLoading(true);

    try {
      const res = await api.get(
        '/BusinessPartners?$select=CardCode,CardName,CardType',
        {
          headers: {
            Cookie: `B1SESSION=${sessionId}`,
          },
        },
      );
      setData(res.data.value);
    } catch (err: any) {
      Alert.alert('Error', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getBusinessPartners,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };
};

export default useBusinessPartners;
