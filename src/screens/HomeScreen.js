import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

import firebase from '../database/firebase'

import { alertErrorFirebase } from '../utils/errors'

const HomeScreen = () => {
  const signOut = async () => {
    try {
      await firebase.auth.signOut()
    } catch (error) {
      alertErrorFirebase(error)
    }
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button mode="text" onPress={signOut}>
        Cerrar Sesión
      </Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
