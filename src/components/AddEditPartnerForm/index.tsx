import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import styles from './styles';

const AddEditPartnerForm = ({partner, onSubmit}: any) => {
  const [cardCode, setCardCode] = useState(partner?.CardCode || '');
  const [cardName, setCardName] = useState(partner?.CardName || '');

  const handleSubmit = () => {
    if (!cardCode || !cardName) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    onSubmit({CardCode: cardCode, CardName: cardName, CardType: 'C'});
    Alert.alert(
      'Success',
      `Partner ${partner ? 'updated' : 'added'} successfully!`,
    );
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Card Code"
        value={cardCode}
        onChangeText={setCardCode}
        style={styles.input}
      />
      <TextInput
        placeholder="Card Name"
        value={cardName}
        onChangeText={setCardName}
        style={styles.input}
      />
      <Button
        title={partner ? 'Update Partner' : 'Add Partner'}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddEditPartnerForm;
