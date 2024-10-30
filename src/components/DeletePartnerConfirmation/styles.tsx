import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  deleteContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  warningText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
  },
  deleteButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
