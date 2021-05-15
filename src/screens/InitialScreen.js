import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button mode="text" onPress={() => navigation.navigate('SignIn')}>
        Iniciar Sesión
      </Button>
    </View>
  )
}

InitialScreen.propTypes = {
  navigation: PropTypes.any
}

export default InitialScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
