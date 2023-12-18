import {Text, View, Image, Pressable, Alert} from 'react-native';
import React from 'react';
import CustomButton from '../ui/button';
import {productItemStyles} from '../../styles/home/homeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../utils/routes';
import {addToChart} from '../../store/actions/productAction';
import {windowWidth} from '../../utils/constans';
import {Star} from 'iconsax-react-native';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector(store => store.auth);
  const addChart = () => {
    if (isLogin) {
      dispatch(
        addToChart({
          userId: 3,
          date: 2019 - 12 - 10,
          products: [{productId: 1, quantity: 3}],
        }),
      );
    } else {
      Alert.alert(
        'Giriş Yap',
        'Giriş yaptıktan sonra ürünü satın alabilirsiniz',
        [
          {
            text: 'Giriş Yap',
            onPress: () => navigation.navigate(LOGIN),
            style: 'cancel',
          },
          {text: 'Vazgeç', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
  };

  return (
    <Pressable style={productItemStyles.container}>
      <View style={productItemStyles.imageContainer}>
        <Image
          style={{
            width: windowWidth / 2 - 30,
            height: windowWidth / 5,
            resizeMode: 'contain',
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={productItemStyles.infoContainer}>
        <Text style={productItemStyles.title}>{item.title}</Text>
        <Text numberOfLines={4} style={productItemStyles.description}>
          {item.description}
        </Text>
        <Text style={productItemStyles.title}>${item.price}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Star size="25" color="#ff8a65" variant="Bold" />
          <Text style={productItemStyles.title}>{item?.rating?.rate}</Text>
        </View>
        {/* <CustomButton
          title={'Sepete Ekle'}
          onPress={() => {
            addChart();
          }}
        /> */}
      </View>
    </Pressable>
  );
};

export default ProductItem;
