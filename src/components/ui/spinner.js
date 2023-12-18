import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/appColors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={AppColors.BLACK} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#fff',
  },
});
