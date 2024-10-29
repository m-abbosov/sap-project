import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
// import useBusinessPartners from '../../hooks/useBusinessPartners';
import {BusinessPartner} from '../../types';
import {AddEditPartnerForm, DeleteConfirmation} from '../../components';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen: React.FC = () => {
  // const {getBusinessPartners} = useBusinessPartners();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [mode, setMode] = useState<'add' | 'edit' | 'delete'>('add');
  const [selectedPartner, setSelectedPartner] =
    useState<BusinessPartner | null>(null);
  const data = [
    {
      '@odata.etag': 'W/"356A192B7913B04C54574D18C28D46E6395428AB"',
      CardCode: '0002',
      CardName: 'DeluxeMCHJ',
      CardType: 'cCustomer',
    },
    {
      '@odata.etag': 'W/"356A192B7913B04C54574D18C28D46E6395428AB"',
      CardCode: '0001',
      CardName: 'KarMchj',
      CardType: 'cSupplier',
    },
  ];

  const handleOpenSheet = (
    sheetMode: 'add' | 'edit' | 'delete',
    partner: BusinessPartner | null = null,
  ) => {
    setSelectedPartner(partner);
    setMode(sheetMode);
    bottomSheetRef.current?.expand();
  };

  // useEffect(() => {
  //   getBusinessPartners();
  // }, [getBusinessPartners]);

  const createBusinessPartner = () => {};

  const updateBusinessPartner = () => {};

  const deleteBusinessPartner = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Business Partners</Text>
        <TouchableOpacity onPress={() => handleOpenSheet('add')}>
          <Icon name="add" size={24} />
        </TouchableOpacity>
      </View>
      {/* {loading ? (
        <ActivityIndicator size={'large'} color={'#007BFF'} />
      ) : ( */}
      <FlatList
        data={data}
        keyExtractor={item => item.CardCode}
        style={styles.partnersList}
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
      {/* )} */}

      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['50%']}>
        <View style={styles.bottomSheetContent}>
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
              partner={selectedPartner}
              onDelete={deleteBusinessPartner}
            />
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
