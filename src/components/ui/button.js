import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/appColors';

const CustomButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    color: AppColors.WHITE,
    fontWeight: '600',
  },
});
