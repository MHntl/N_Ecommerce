import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import React from 'react';
import {AppColors} from '../../theme/appColors';
import {useSelector} from 'react-redux';
import {Login} from 'iconsax-react-native';
import {LOGIN} from '../../utils/routes';

const Cart = ({navigation}) => {
  const {isLogin, token} = useSelector(store => store.auth);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>{token}</Text>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Login size="80" color={AppColors.BLUE} />
          <Text
            style={{marginVertical: 15, fontSize: 14, color: AppColors.BLACK}}>
            Lütfen Giriş Yaparak Alışveriş Yapmaya Devem Edin.
          </Text>
          <Button
            onPress={() => navigation.navigate(LOGIN)}
            style={styles.button}
            appearance="filled">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  button: {
    marginVertical: 15,
  },
});
