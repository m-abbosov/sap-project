import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import styles from './styles';

const DeleteConfirmation = ({partner, onDelete}: any) => {
  const handleDelete = () => {
    onDelete(partner.CardCode);
    Alert.alert('Deleted', 'Business Partner deleted successfully!');
  };

  return (
    <View style={styles.deleteContainer}>
      <Text style={styles.deleteText}>
        Are you sure you want to delete {partner?.CardName}?
      </Text>
      <Button title="Yes, Delete" onPress={handleDelete} color="red" />
    </View>
  );
};

export default DeleteConfirmation;
