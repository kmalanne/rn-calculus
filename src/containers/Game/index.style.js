import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gameContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  numberBoardContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  questionTextContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 60,
  },
});
