import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  addBtn: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
