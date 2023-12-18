import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {AppColors} from '../../theme/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {Login, Logout, ProfileCircle} from 'iconsax-react-native';
import {LOGIN} from '../../utils/routes';
import {userLogOut} from '../../store/actions/authAction';
import {getUserProfile} from '../../store/actions/profileAction';

const Profile = ({navigation}) => {
  const {isLogin} = useSelector(store => store.auth);
  const {profileInfo, pending} = useSelector(store => store.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({id: 1}));
  }, []);
  return (
    <View style={styles.container}>
      {!isLogin ? (
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
      ) : pending ? (
        <View style={{alignItems: `center`, justifyContent: `center`, flex: 1}}>
          <ActivityIndicator size={'large'} color={AppColors.PRIMARY} />
        </View>
      ) : (
        <View style={{flex: 1, paddingVertical: 20, alignItems: 'center'}}>
          <ProfileCircle size="80" color={AppColors.GRAY} />
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {profileInfo?.username}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500'}}>
            {profileInfo?.email}
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {profileInfo?.name?.firstname + ' ' + profileInfo?.name?.lastname}
          </Text>
          <Button
            onPress={() => dispatch(userLogOut())}
            style={styles.button}
            status="danger"
            appearance="filled">
            Çıkış Yap
          </Button>
        </View>
      )}
    </View>
  );
};

export default Profile;

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
