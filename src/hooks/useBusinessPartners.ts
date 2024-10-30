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

  const addPartner = useCallback(
    async (partner: BusinessPartner, clearFiels: () => void) => {
      const sessionId = await AsyncStorage.getItem('sessionId');
      if (!sessionId) {
        service.navigate('login');
        return;
      }
      setLoading(true);

      try {
        await api.post('/BusinessPartners', partner, {
          headers: {
            Cookie: `B1SESSION=${sessionId}`,
          },
        });
        Alert.alert('Success', 'Business Partner added successfully!');
        clearFiels();
        getBusinessPartners();
      } catch (err: any) {
        Alert.alert('Error', err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [getBusinessPartners],
  );

  const editPartner = async (partner: BusinessPartner) => {
    const sessionId = await AsyncStorage.getItem('sessionId');
    if (!sessionId) {
      service.navigate('login');
      return;
    }

    setLoading(true);

    console.log('partner:', partner.CardName);

    try {
      const response = await api.patch(
        `/BusinessPartners('${partner.CardCode}')`,
        {CardName: partner.CardName},
        {
          headers: {
            cookie: `B1SESSION=${sessionId}`,
          },
        },
      );
      console.log('Response:', response.data);

      Alert.alert('Success', 'Business Partner edited successfully!');
      getBusinessPartners();
    } catch (err: any) {
      console.error('Error:', err);
      Alert.alert('Error', err.response?.data?.message || err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deletePartner = useCallback(
    async (cardCode: string) => {
      const sessionId = await AsyncStorage.getItem('sessionId');
      if (!sessionId) {
        service.navigate('login');
        return;
      }
      setLoading(true);

      try {
        await api.delete(`/BusinessPartners('${cardCode}')`, {
          headers: {
            Cookie: `B1SESSION=${sessionId}`,
          },
        });
        Alert.alert('Success', 'Business Partner deleted successfully!');
        getBusinessPartners();
      } catch (err: any) {
        Alert.alert('Error', err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [getBusinessPartners],
  );

  return {
    addPartner,
    getBusinessPartners,
    editPartner,
    deletePartner,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };
};

export default useBusinessPartners;
