import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import firebase from '../database/firebase'

import useForm from '../hooks/useForm'
import { alertErrorFirebase } from '../utils/errors'

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false)
  const [
    { email, password, firstName, lastName },
    handleInputChange
  ] = useForm({ email: '', password: '', firstName: '', lastName: '' })

  const handleSave = async () => {
    try {
      setLoading(true)
      await firebase.auth.createUserWithEmailAndPassword(email, password)
      const currentUser = firebase.auth.currentUser

      firebase.db.collection('users')
        .doc(currentUser.uid)
        .set({
          email: currentUser.email,
          firstName,
          lastName
        })
    } catch (error) {
      alertErrorFirebase(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.form}>
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleInputChange('email', text)}
          style={styles.input}
          theme={{ roundness: 10 }}
          disabled={loading}
        />
        <TextInput
          mode="outlined"
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => handleInputChange('password', text)}
          style={styles.input}
          keyboardType="numeric"
          secureTextEntry
          theme={{ roundness: 10 }}
          maxLength={8}
          disabled={loading}
        />
        <TextInput
          mode="outlined"
          placeholder="Nombre"
          value={firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
          style={styles.input}
          theme={{ roundness: 10 }}
          disabled={loading}
        />
        <TextInput
          mode="outlined"
          placeholder="Apellidos"
          value={lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
          style={styles.input}
          theme={{ roundness: 10 }}
          disabled={loading}
        />
        <Button mode="text" onPress={handleSave} loading={loading} disabled={loading}>
          Registrarse
        </Button>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    paddingHorizontal: 30
  },
  input: {
    marginBottom: 10
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  }
})
