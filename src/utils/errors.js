import { Alert } from 'react-native'

export const alertErrorFirebase = ({ code, message }) => {
  console.log(code, message)
  switch (code) {
    case 'auth/email-already-in-use': {
      Alert.alert('Error', 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.')
      break
    }
    case 'auth/wrong-password': {
      Alert.alert('Error', 'La contraseña no es válida o el usuario no tiene contraseña.')
      break
    }
    default:
      console.log(code, message)
      break
  }
}
