import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const starts = props => {
  return (
    <View>
      <View style={styles.starstyle}>
        {(function () {
          if (props.shop_stars !== 0) {
            const items = [];
            for (let i = 0; i < props.shop_stars; i++) {
              items.push(
                <Ionicons name="star" color="#EC6B3A" key={i} size={20} />,
              );
            }
            return items;
          }
        })()}
        {(function () {
          if (5 - props.shop_stars !== 0) {
            const items = [];
            for (let i = 0; i < 5 - props.shop_stars; i++) {
              items.push(
                <Ionicons name="star" color="#E5E5E5" key={i + 5} size={20} />,
              );
            }
            return items;
          }
        })()}
        <Text style={styles.fontstyle}>{props.shop_stars}.0</Text>
      </View>
    </View>
  );
};

export default starts;

const styles = StyleSheet.create({
  starstyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontstyle: {
    color: '#EC6B3A',
    fontSize: 20,
    marginLeft: 10,
  },
});
