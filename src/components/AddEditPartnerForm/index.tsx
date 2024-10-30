import React, {useEffect, useState} from 'react';
import {View, TextInput, Alert, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const AddEditPartnerForm = ({partner, onSubmit}: any) => {
  const [cardCode, setCardCode] = useState(partner?.CardCode || '');
  const [cardName, setCardName] = useState(partner?.CardName || '');
  const clearFields = () => {
    setCardCode('');
    setCardName('');
  };

  const handleSubmit = () => {
    if (!cardCode || !cardName) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    onSubmit(
      {CardCode: cardCode, CardName: cardName, CardType: 'C'},
      clearFields,
    );
  };

  useEffect(() => {
    setCardCode(partner?.CardCode || '');
    setCardName(partner?.CardName || '');
  }, [partner]);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.headerText}>
        {partner ? 'Edit Business Partner' : 'Add New Business Partner'}
      </Text>
      <TextInput
        placeholder="Card Code"
        value={cardCode}
        onChangeText={setCardCode}
        style={styles.input}
        readOnly={partner ? true : false}
      />
      <TextInput
        placeholder="Card Name"
        value={cardName}
        onChangeText={setCardName}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.6}
        style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEditPartnerForm;
