import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

import { GoogleAuthProvider, signInWithPopup, signInWithCredential  } from 'firebase/auth'
import { auth } from '../../../firebase'

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {

  const handleGoogleSignIn = async () => {

    const provider = new GoogleAuthProvider();

    try {
      const { idToken } = await GoogleSignIn.signInAsync()
  
      const credential = provider.credential(idToken)
      const { user } = await signInWithCredential(auth, credential)
  
      console.log(user)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn