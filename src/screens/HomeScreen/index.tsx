import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import useBusinessPartners from '../../hooks/useBusinessPartners';
import {BusinessPartner} from '../../types';
import {AddEditPartnerForm, DeleteConfirmation} from '../../components';
import service from '../../navigators/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen: React.FC = () => {
  const {
    addPartner,
    getBusinessPartners,
    editPartner,
    deletePartner,
    loading,
    data,
  } = useBusinessPartners();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [mode, setMode] = useState<'add' | 'edit' | 'delete'>('add');
  const [selectedPartner, setSelectedPartner] =
    useState<BusinessPartner | null>(null);

  const handleOpenSheet = (
    sheetMode: 'add' | 'edit' | 'delete',
    partner: BusinessPartner | null = null,
  ) => {
    setMode(sheetMode);

    if (sheetMode !== 'add') {
      setSelectedPartner(null);
      setSelectedPartner(partner);
    }
    if (bottomSheetRef.current) {
      bottomSheetRef.current.collapse();
    }
  };

  const refresh = () => {
    getBusinessPartners();
  };

  useEffect(() => {
    getBusinessPartners();
  }, [getBusinessPartners]);

  const createBusinessPartner = (
    newPartner: BusinessPartner,
    clearFields: () => void,
  ) => {
    addPartner(newPartner, clearFields);
    bottomSheetRef.current?.close();
  };

  const updateBusinessPartner = (newPartner: BusinessPartner) => {
    editPartner(newPartner);
    bottomSheetRef.current?.close();
  };

  const deleteBusinessPartner = () => {
    if (selectedPartner) {
      deletePartner(selectedPartner.CardCode);
      bottomSheetRef.current?.close();
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('sessionId');
    service.reset('login');
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Business Partners</Text>
          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => refresh()}>
              <Icon name="refresh" size={24} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleOpenSheet('add')}>
              <Icon name="add" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Icon name="logout" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size={'large'} color={'#007BFF'} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.CardCode}
            style={styles.partnersList}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.partnersListItem}>
                <View style={styles.partnersListItemBox}>
                  <Text style={styles.cardCodeText}>{item.CardCode}</Text>
                  <Text style={styles.cardNameText}>{item.CardName}</Text>
                  <Text style={styles.cardTypeText}>({item.CardType})</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => handleOpenSheet('edit', item)}
                    style={styles.iconButton}>
                    <Icon name="edit" size={24} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleOpenSheet('delete', item)}
                    style={styles.iconButton}>
                    <Icon name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}

        <BottomSheet
          enablePanDownToClose
          ref={bottomSheetRef}
          index={-1}
          snapPoints={['70%']}>
          <BottomSheetView style={styles.bottomSheetContent}>
            {mode === 'add' && (
              <AddEditPartnerForm onSubmit={createBusinessPartner} />
            )}
            {mode === 'edit' && (
              <AddEditPartnerForm
                partner={selectedPartner}
                onSubmit={updateBusinessPartner}
              />
            )}
            {mode === 'delete' && (
              <DeleteConfirmation
                key={selectedPartner?.CardCode}
                partner={selectedPartner}
                onDelete={deleteBusinessPartner}
                onClose={() => bottomSheetRef.current?.close()}
              />
            )}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </BottomSheetModalProvider>
  );
};

export default HomeScreen;
