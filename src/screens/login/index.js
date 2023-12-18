import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Button, Text, Input, Layout} from '@ui-kitten/components';
import {loginSchema} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import {AppColors} from '../../theme/appColors';
import {userLogin} from '../../store/actions/authAction';
import {REGISTER} from '../../utils/routes';

const Login = ({navigation}) => {
  const {loginPending, isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);
  return (
    <View>
      <Formik
        // initialValues={{username: '', password: ''}}
        initialValues={{username: 'mor_2314', password: '83r5^_'}}
        onSubmit={values => dispatch(userLogin(values))}
        validationSchema={loginSchema}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <View style={{padding: 10}}>
            <View
              style={{
                minHeight: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 250, height: 250, resizeMode: 'contain'}}
                source={require('../../assets/images/appIcon.png')}
              />
            </View>
            <Input
              status={errors.username ? `danger` : `basic`}
              caption={errors.username}
              label="Username"
              size="large"
              style={styles.input}
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
            />
            <Input
              status={errors.password ? `danger` : `basic`}
              size="large"
              label={'Password'}
              caption={errors.password}
              style={styles.input}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              onPress={handleSubmit}
              style={loginPending ? styles.passiveButton : styles.activeButton}
              appearance="filled">
              {loginPending ? (
                <ActivityIndicator size={`small`} />
              ) : (
                <Text>Giris Yap</Text>
              )}
            </Button>
            <Button
              onPress={() => {
                navigation.navigate(REGISTER, {
                  username: values.username,
                  password: values.password,
                });
              }}
              status="primary"
              style={loginPending ? styles.passiveButton : styles.activeButton}
              appearance="outline">
              <Text>Kayıt Ol</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  activeButton: {
    marginVertical: 15,
  },
  passiveButton: {
    marginVertical: 15,
    backgroundColor: AppColors.GRAY,
  },
  input: {
    marginVertical: 15,
  },
});
