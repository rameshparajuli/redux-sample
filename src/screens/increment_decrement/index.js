import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  Increment,
  Decrement,
} from '../../redux/increment_decrement/increment_decrement.actions';
const IncrementDecrement = ({increment, decrement, result}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={increment}
          //   activeOpacity={1}
          style={styles.button}>
          <Text style={styles.plusminus}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={decrement}
          //   activeOpacity={1}
          style={styles.button}>
          <Text style={styles.plusminus}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(Increment()),
  decrement: () => dispatch(Decrement()),
});

const mapStateToProps = (state) => ({
  result: state.incrementDecrement.result,
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    padding: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusminus: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonView: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrement);
