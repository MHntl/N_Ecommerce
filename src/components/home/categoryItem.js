import {ArrowRight} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../theme/appColors';
import {windowHeight} from '../../utils/constans';
import {PRODUCT_LIST} from '../../utils/routes';

const CategoryItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCT_LIST, {category: item})}
      style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
          {item}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: windowHeight / 6,
    flexDirection: 'row',
    backgroundColor: AppColors.GRAY,
    margin: 5,
    borderRadius: 10,
  },
});

export default CategoryItem;
