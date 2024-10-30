import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {BusinessPartner} from '../../types';
interface Props {
  partner: BusinessPartner | null;
  onDelete: (cardCode: string) => void;
  onClose: () => void;
}

const DeleteConfirmation = ({partner, onDelete, onClose}: Props) => {
  const handleDelete = () => {
    if (partner) {
      onDelete(partner.CardCode);
    }
  };

  return (
    <View style={styles.deleteContainer}>
      {partner ? (
        <>
          <Text style={styles.warningText}>
            Are you sure you want to delete "{partner.CardName}"?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDelete}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Yes, Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.warningText}>Select a partner to delete.</Text>
      )}
    </View>
  );
};

export default DeleteConfirmation;
