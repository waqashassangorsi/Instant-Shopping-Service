import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../theme/colors';
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const window = Dimensions.get('window');
const SIZE = 30;
import {Fonts} from '../../../utils/Fonts';
const ICON_WRAPPER_SIZE = 25;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  colorwi: {
    color: colors.primary,
    fontFamily: Fonts.PoppinsBold,
    fontSize: 15,
  },
  large: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.PoppinsBold,
  },
  medium: {
    fontSize: 14,
  },
  // cardContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',

  //   marginVertical: 10,
  //   marginHorizontal: 15,
  //   padding: 20,
  //   borderRadius: 2,
  //   backgroundColor: '#F8FEFF',
  //   borderRadius: 20,
  //   elevation: 5,
  //   shadowColor: '#BDBDBD',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  // },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 2,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    height: 70,
    width: 70,
    borderRadius: 35,
    position: 'absolute',
    right: -20,
    top: -10,
    backgroundColor: '#c2961d',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    borderRadius: 20,

    height: 25,
    width: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    margin: 5,
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    margin: 25,
    justifyContent: 'space-between',
    height: window.height / 3.4,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
});
export default styles;
