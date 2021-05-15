import React from 'react'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import InitialScreen from './../screens/InitialScreen'
import SignInScreen from './../screens/SignInScreen'
import SignUpScreen from './../screens/SignUpScreen'
import HomeScreen from './../screens/HomeScreen'

const Stack = createStackNavigator()

export default function Routes ({ signIn }) {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          {
            !signIn
              ? (
              <>
                <Stack.Screen name="Initial" component={InitialScreen} options={{ title: 'Bienvenido' }} />
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Iniciar Sesión' }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Registrarse' }} />
              </>
                )
              : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
              </>
                )
          }
        </Stack.Navigator>
      </NavigationContainer>
  )
}

Routes.propTypes = {
  signIn: PropTypes.bool.isRequired
}
