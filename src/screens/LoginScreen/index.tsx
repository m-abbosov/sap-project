import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useLogin from '../../hooks/useLogin';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('sb1\\aex_user01a');
  const [password, setPassword] = useState<string>('3N(Z#vLJ');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const {login, loading} = useLogin();
  const handleLogin = () => {
    if (username && password) {
      login(username, password);
    } else {
      Alert.alert('username or password is empty');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.firstCircle} />
        <View style={styles.secondCircle} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            disabled={loading}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Kirish</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
