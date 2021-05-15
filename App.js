import React, { useEffect, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import firebase from './src/database/firebase'
import Routes from './src/routes'

export default function App () {
  const [signIn, setSignIn] = useState(false)

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        setSignIn(true)
      } else {
        setSignIn(false)
      }
    })
  })

  return (
    <PaperProvider>
      <Routes signIn={signIn}/>
    </PaperProvider>
  )
}
