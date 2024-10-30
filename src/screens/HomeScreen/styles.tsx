import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  partnersList: {},
  partnersListItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  partnersListItemBox: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    gap: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardCodeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
  },
  cardNameText: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  cardTypeText: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 2,
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
