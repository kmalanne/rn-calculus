import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  correctResultText: {
    color: '#2ECC71',
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  numberBoardContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 60,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  textBoxContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  wrongResultText: {
    color: '#FF0307',
  },
});
