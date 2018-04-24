import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 5,
  },
  checked: {
    backgroundColor: '#fff',
  },
  unchecked: {
    backgroundColor: '#f39c12',
  },
  text: {
    fontSize: 40,
  },
  checkedText: {
    color: '#f39c12',
  },
  uncheckedText: {
    color: '#fff',
  },
});
