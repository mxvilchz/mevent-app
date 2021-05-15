import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { TextInput, Button, Divider } from 'react-native-paper'

import img from './../../assets/backgroundsignin.png'
import useForm from '../hooks/useForm'
import firebase from '../database/firebase'
import { alertErrorFirebase } from '../utils/errors'

const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [{ email, password }, handleInputChange] = useForm({ email: '', password: '' })

  const handleLogin = async () => {
    try {
      setLoading(true)
      await firebase.auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      alertErrorFirebase(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.form}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            value={email}
            onChangeText={text => handleInputChange('email', text)}
            style={styles.input}
            theme={{ roundness: 10 }}
            disabled={loading}
          />
          <TextInput
            mode="outlined"
            placeholder="Contraseña"
            value={password}
            onChangeText={text => handleInputChange('password', text)}
            style={styles.input}
            keyboardType="numeric"
            secureTextEntry
            theme={{ roundness: 10 }}
            disabled={loading}
          />
          <Button
            mode="text"
            onPress={handleLogin}
            color="#ffffff"
            loading={loading}
            disabled={loading}
          >
            Iniciar Sesión
          </Button>
          <Divider />
          <Button mode="text" onPress={() => navigation.navigate('SignUp')} color="#ffffff">
            Nuevo registro
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

SignInScreen.propTypes = {
  navigation: PropTypes.any
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  form: {
    padding: 30
  },
  input: {
    marginBottom: 10
  }
})
